import React, { useEffect, useState } from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./WithAudioRecorder";
import Metronome from "./Metronome";
import MetronomeButton from "./MetronomeButton";
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
        const { audioContext, createCue, removeCue } = args;

        return (
          <TimingContextProvider
            value={{
              AudioContext: audioContext,
              createCue,
              removeCue,
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
                <MetronomeButton />
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
