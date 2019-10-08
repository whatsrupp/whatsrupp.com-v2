import React from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./WithAudioRecorder";
import Metronome from "./Metronome";
import MetronomeButton from "./MetronomeButton";

const Loops: React.FC = () => {
  return (
    <Metronome>
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
    </Metronome>
  );
};

export default Loops;
