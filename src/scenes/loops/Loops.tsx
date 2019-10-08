import React, { useEffect, useState } from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./WithAudioRecorder";
import Metronome from "./Metronome";

import { TimingContextValuesType } from "./types";

import createContext from "./createContext";

export const [useTimingContext, TimingContextProvider] = createContext<
  TimingContextValuesType
>();

const Loops: React.FC = () => {
  const [AudioContext, setAudioContext] = useState(null);

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

  if (!AudioContext) {
    return <div>loading</div>;
  }
  return (
    <Metronome>
      {(args: any) => {
        const { createCue, startScheduler, stopScheduler, isPlaying } = args;
        const renderPlayButton = () => {
          if (!isPlaying) {
            return (
              <SC.PlayButton
                onClick={() => {
                  startScheduler();
                }}
              >
                <SC.PlayIcon />
              </SC.PlayButton>
            );
          } else {
            return (
              <SC.PlayButton
                onClick={() => {
                  stopScheduler();
                }}
              >
                <SC.PauseIcon />
              </SC.PlayButton>
            );
          }
        };
        return (
          <TimingContextProvider
            value={{
              AudioContext,
              createCue,
              tempo: 120,
              beatsInBar: 4
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
                  {(props: any) => {
                    return <Track {...props} />;
                  }}
                </AudioRecorder>
                {renderPlayButton()}
              </SC.Body>
              <SC.Footer></SC.Footer>
            </SC.PageLayout>
          </TimingContextProvider>
        );
      }}
    </Metronome>
  );
};

export default Loops;
