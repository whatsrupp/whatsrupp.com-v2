import React from "react";
import PropTypes from "prop-types";
import metronomeWorker from "./metronome.worker";

import {
  ACTION_START,
  ACTION_STOP,
  ACTION_UPDATE,
  ACTION_TICK,
  TICKS_PER_BEAT_BINARY,
  TICKS_PER_BEAT_TERNARY,
  SECONDS_IN_MINUTE,
  SCHEDULE_AHEAD_TIME,
  NOTE_LENGTH
} from "./constants";

class Metronome extends React.Component {
  static propTypes = {
    tempo: PropTypes.number,
    beatsInBar: PropTypes.number,
    subdivision: PropTypes.number,
    autoplay: PropTypes.bool,
    beatFrequency: PropTypes.number,
    beatVolume: PropTypes.number,
    subdivisionFrequency: PropTypes.number,
    subdivisionVolume: PropTypes.number,
    render: PropTypes.func
  };

  static defaultProps = {
    tempo: 120,
    beatsInBar: 4,
    subdivision: 1,
    beatFrequency: 880,
    beatVolume: 1,
    subdivisionFrequency: 440,
    subdivisionVolume: 0.5,
    autoplay: false,
    render: () => null
  };

  constructor(props) {
    super(props);

    this.ticksPerBeat =
      this.props.beatsInBar % 3 === 0 || this.props.subdivision % 3 === 0
        ? TICKS_PER_BEAT_TERNARY
        : TICKS_PER_BEAT_BINARY;

    this.timerWorker = new Worker(metronomeWorker);
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.nextNoteTime = 0;
    this.currentBeat = 0;

    this.state = {
      beat: 0,
      subBeat: 0,
      isPlaying: this.props.autoplay === true,
      tempo: this.props.tempo,
      beatsInBar: this.props.beatsInBar,
      subdivision: this.props.subdivision
    };
  }

  componentDidMount() {
    this.timerWorker.onmessage = event => {
      if (event.data === ACTION_TICK) {
        this.runScheduler();
      }
    };

    this.state.isPlaying && this.start();
  }

  componentWillUnmount() {
    this.timerWorker.postMessage({
      action: ACTION_STOP
    });
  }

  runScheduler = () => {
    while (
      this.nextNoteTime <
      this.audioContext.currentTime + SCHEDULE_AHEAD_TIME
    ) {
      this.tick();

      const secondsPerBeat = SECONDS_IN_MINUTE / this.state.tempo;
      this.nextNoteTime +=
        (this.state.beatsInBar / this.ticksPerBeat) * secondsPerBeat;
      this.currentBeat++;

      if (this.currentBeat === this.ticksPerBeat) {
        this.currentBeat = 0;
      }
    }
  };

  tick = () => {
    const time = this.nextNoteTime;
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc.frequency.value = 220.0;

    osc.start(time);
    osc.stop(time + NOTE_LENGTH);

    this.setState(state => ({
      subBeat:
        state.subBeat === this.state.subdivision ? 1 : state.subBeat + 1 || 1
    }));
  };

  start = () => {
    this.currentBeat = 0;
    this.nextNoteTime = this.audioContext.currentTime;

    this.timerWorker.postMessage({
      action: ACTION_START,
      tempo: this.state.tempo,
      subdivision: this.state.subdivision
    });

    this.setState({
      beat: 0,
      isPlaying: true
    });
  };

  stop = () => {
    this.timerWorker.postMessage({
      action: ACTION_STOP
    });

    this.setState({
      isPlaying: false
    });
  };

  onPlay = () => {
    this.state.isPlaying ? this.stop() : this.start();
  };

  onTempoChange = tempo => {
    this.timerWorker.postMessage({
      action: ACTION_UPDATE
    });

    this.setState({
      tempo
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      onTempoChange: this.onTempoChange,
      onPlay: this.onPlay
    });
  }
}

export default Metronome;
