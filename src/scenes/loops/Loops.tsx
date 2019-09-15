import React, { useEffect, useState } from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./WithAudioRecorder";
interface ILoopsProps {}

export const TimingContext = React.createContext({
  AudioContext: null,
  tempo: 120,
  beatsInBar: 4
});

const TEMPO = 10;
const BEATS_IN_BAR = 4;
const SCHEDULE_AHEAD_TIME = 25;

const Loops: React.FC = () => {
  const [AudioContext, setAudioContext] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nextNoteTime, setNextNoteTime] = useState(0);
  const [current16thNote, setCurrent16thNote] = useState(0);
  const [tempo, setTempo] = useState(80);
  const [beatsInBar, setBeatsInBar] = useState(4);

  useEffect(() => {
    if (!AudioContext) {
      setAudioContext(new window.AudioContext());
    } else {
      const cleanup = () => {
        AudioContext.close();
      };
      return cleanup;
    }
  }, [AudioContext]);

  useEffect(() => {
    const SCHEDULE_AHEAD_TIME = 25;

    const nextNote = async () => {
      const secondsPerBeat = 60 / TEMPO;
      const secondsPer16thNote = secondsPerBeat / 4;
      const currentNoteTime = nextNoteTime;

      console.log("TCL: nextNote -> nextNoteTime", nextNoteTime);
      setNextNoteTime(currentNoteTime + secondsPer16thNote);
      console.log(
        "TCL: nextNote -> urrentNoteTime + secondsPer16thNote",
        currentNoteTime + secondsPer16thNote
      );
      console.log("TCL: nextNote -> nextNoteTime", nextNoteTime);

      let next16thNote = current16thNote + 1;
      if (next16thNote === 16) {
        next16thNote = 0;
      }
      setCurrent16thNote(next16thNote);
      console.log("TCL: nextNote -> next16thNote", next16thNote);
    };

    const scheduleNote = () => {
      var osc = AudioContext.createOscillator();
      osc.connect(AudioContext.destination);
      osc.frequency.value = 220.0;
      osc.start(nextNoteTime);
      console.log("TCL: scheduleNote -> nextNoteTime", nextNoteTime);
      const noteLength = 0.05;
      osc.stop(nextNoteTime + noteLength);
      console.log(
        "TCL: scheduleNote -> nextNoteTime + noteLength",
        nextNoteTime + noteLength
      );
    };

    const scheduler = () => {
      // while there are notes that will need to play before the next interval,
      // schedule them and advance the pointer.
      if (!AudioContext) return;
      if (!isPlaying) return;
      if (
        sessionStartTime + nextNoteTime <
        AudioContext.currentTime + SCHEDULE_AHEAD_TIME
      ) {
        console.log(
          "TCL: scheduler -> AudioContext.currentTime + SCHEDULE_AHEAD_TIME",
          AudioContext.currentTime + SCHEDULE_AHEAD_TIME
        );
        console.log(
          "TCL: scheduler -> SCHEDULE_AHEAD_TIME",
          SCHEDULE_AHEAD_TIME
        );
        console.log(
          "TCL: scheduler -> AudioContext.currentTime",
          AudioContext.currentTime
        );
        console.log("TCL: scheduler -> nextNoteTime", nextNoteTime);
        scheduleNote();

        nextNote();
      }
    };

    if (!isPlaying) return;
    const intervalId = setInterval(() => {
      scheduler();
    }, SCHEDULE_AHEAD_TIME);

    const cleanupInterval = () => {
      clearInterval(intervalId);
    };

    return cleanupInterval;
  }, [
    AudioContext,
    current16thNote,
    isPlaying,
    nextNoteTime,
    sessionStartTime
  ]);

  const renderPlayButton = () => {
    if (!isPlaying) {
      return (
        <SC.PlayButton
          onClick={() => {
            setSessionStartTime(AudioContext.currentTime);
            setIsPlaying(true);
            setNextNoteTime(0);
          }}
        >
          <SC.PlayIcon />
        </SC.PlayButton>
      );
    } else {
      return (
        <SC.PlayButton
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          <SC.PauseIcon />
        </SC.PlayButton>
      );
    }
  };

  if (!AudioContext) {
    return <div>loading</div>;
  }
  return (
    <TimingContext.Provider
      value={{
        AudioContext
      }}
    >
      <SC.PageLayout>
        <SC.Header>
          <SC.Head src={images.jack} />
          <SC.Head src={images.nick} />
          <SC.Logo src={images.logo} />
          <SC.Head src={images.will} />
          <SC.Head src={images.viv} />
        </SC.Header>
        <SC.Body>
          <AudioRecorder>
            {props => {
              return <Track {...props} />;
            }}
          </AudioRecorder>
          {renderPlayButton()}
        </SC.Body>
        <SC.Footer></SC.Footer>
      </SC.PageLayout>
    </TimingContext.Provider>
  );
};

export default Loops;
