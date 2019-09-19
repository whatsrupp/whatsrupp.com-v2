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

    this.eventList = [];
  }

  componentDidMount() {
    this.timerWorker.onmessage = event => {
      if (event.data === WORKER_TICK) {
        this.runScheduler();
      }
    };

    this.state.isPlaying && this.start();
  }

  componentWillUnmount() {
    this.timerWorker.postMessage({
      action: STOP_WORKER
    });
  }

  runScheduler = () => {
    while (
      this.currentBeatTime <
      this.audioContext.currentTime + SCHEDULE_AHEAD_TIME
    ) {
      this.tick();
      this.cueFunction();
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

  tick = () => {
    const time = this.currentBeatTime;
    const osc = this.audioContext.createOscillator();
    osc.connect(this.audioContext.destination);

    osc.frequency.value = 220.0;
    const noteLength = 0.05;
    osc.start(time);
    osc.stop(time + noteLength);
  };

  cueFunction = func => {
    if (this.currentBeat !== 0) return;
    if (!func) return;

    const dummyOscillator = this.audioContext.createOscillator();
    dummyOscillator.connect(this.audioContext.destination);
    dummyOscillator.onended = () => {
      func();
    };
    dummyOscillator.start(this.nextBeatTime);
    dummyOscillator.stop(this.nextBeatTime);
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
      cueFunction: this.cueFunction
    });
  }
}

export default Metronome;
