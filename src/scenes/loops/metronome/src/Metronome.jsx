import React from "react";
import PropTypes from "prop-types";
import metronomeWorker from "./metronome.worker";

import {
  START_WORKER,
  STOP_WORKER,
  WORKER_TICK,
  SECONDS_IN_MINUTE,
  SCHEDULE_AHEAD_TIME
} from "./constants";

class Metronome extends React.Component {
  static propTypes = {
    tempo: PropTypes.number,
    beatsInBar: PropTypes.number,
    numberOfBars: PropTypes.number,
    subdivision: PropTypes.number,
    autoplay: PropTypes.bool,
    beatFrequency: PropTypes.number,
    render: PropTypes.func
  };

  static defaultProps = {
    tempo: 120,
    beatsInBar: 4,
    numberOfBars: 4,
    typeOfBeat: 4,
    beatFrequency: 880,
    autoplay: false,
    render: () => null
  };

  constructor(props) {
    super(props);

    this.timerWorker = new Worker(metronomeWorker);
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.currentBeatTime = 0;
    this.currentBeat = 0;
    this.currentBar = 0;

    this.state = {
      beat: 0,
      bar: 0,
      isPlaying: this.props.autoplay === true
    };

    this.idCounter = 0;

    this.cues = [];
  }

  componentDidMount() {
    this.timerWorker.onmessage = event => {
      if (event.data === WORKER_TICK) {
        this.runScheduler();
      }
    };

    this.createCue({ cueCallback: this.metronomeCue, isRecurring: true });
    this.state.isPlaying && this.start();
  }

  metronomeCue = ({ audioContext, currentBeatTime }) => {
    const osc = audioContext.createOscillator();
    osc.connect(audioContext.destination);

    osc.frequency.value = 220.0;
    const noteLength = 0.05;
    osc.start(currentBeatTime);
    osc.stop(currentBeatTime + noteLength);
  };

  componentWillUnmount() {
    this.timerWorker.postMessage({
      action: STOP_WORKER
    });
  }

  callCues = () => {
    const cueIdsToRemove = this.cues.reduce((acc, cue) => {
      cue.cueCallback({
        audioContext: this.audioContext,
        currentBeat: this.currentBeat,
        currentBar: this.currentBar,
        currentBeatTime: this.currentBeatTime,
        cueFunctionAtTime: this.cueFunctionAtTime,
        tempo: this.props.tempo,
        beatsInBar: this.props.beatsInBar
      });

      if (!cue.isRecurring) {
        acc.push(cue.id);
      }
      return acc;
    }, []);

    cueIdsToRemove.forEach(cueId => {
      this.removeCue(cueId);
    });
  };

  removeCue = cueId => {
    const filteredCues = this.cues.filter(cue => {
      return cueId !== cue.id;
    });

    this.cues = filteredCues;
  };

  generateId = () => {
    const id = this.idCounter;
    this.idCounter++;
    return id;
  };

  createCue = cueDefinition => {
    const { cueCallback, isRecurring } = cueDefinition;
    const cueId = this.generateId();
    this.cues.push({
      id: cueId,
      cueCallback,
      isRecurring
    });
    return cueId;
  };

  runScheduler = () => {
    while (
      this.currentBeatTime <
      this.audioContext.currentTime + SCHEDULE_AHEAD_TIME
    ) {
      this.callCues();
      this.updateStateForNextTick();
    }
  };

  updateStateForNextTick = () => {
    const secondsPerBeat = SECONDS_IN_MINUTE / this.props.tempo;
    this.currentBeatTime += secondsPerBeat;

    this.currentBeat++;

    if (this.currentBeat === this.props.beatsInBar) {
      this.currentBeat = 0;
      this.currentBar++;
    }

    if (this.currentBar === this.props.numberOfBars) {
      this.currentBar = 0;
    }
  };

  cueFunctionAtTime = (func, time) => {
    if (!func) return;
    if (!time) return;

    const dummyOscillator = this.audioContext.createOscillator();
    dummyOscillator.connect(this.audioContext.destination);
    dummyOscillator.onended = () => {
      func();
    };
    dummyOscillator.start(time);
    dummyOscillator.stop(time);
  };

  start = () => {
    this.currentBeat = 0;
    this.currentBeatTime = this.audioContext.currentTime;

    this.timerWorker.postMessage({
      action: START_WORKER
    });

    this.setState({
      beat: 0,
      isPlaying: true
    });
  };

  stop = () => {
    this.timerWorker.postMessage({
      action: STOP_WORKER
    });

    this.setState({
      isPlaying: false
    });
  };

  onPlay = () => {
    this.state.isPlaying ? this.stop() : this.start();
  };

  startScheduler = () => {
    this.start();
  };

  stopScheduler = () => {
    this.stop();
  };

  changeTempo = tempo => {
    this.setState({
      tempo
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      changeTempo: this.changeTempo,
      onPlay: this.onPlay,
      createCue: this.createCue,
      removeCue: this.removeCue,
      startScheduler: this.startScheduler,
      stopScheduler: this.stopScheduler
    });
  }
}

export default Metronome;
