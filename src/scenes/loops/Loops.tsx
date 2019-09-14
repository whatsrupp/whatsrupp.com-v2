import React, { useEffect, useState } from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./WithAudioRecorder";
interface ILoopsProps {}

export const TimingContext = React.createContext({
  AudioContext: null
});

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
        </SC.Body>
        <SC.Footer></SC.Footer>
      </SC.PageLayout>
    </TimingContext.Provider>
  );
};

export default Loops;
