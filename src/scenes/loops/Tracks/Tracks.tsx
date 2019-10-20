import React from "react";
import AudioRecorder from "../WithAudioRecorder";
import Track from "../Track";

const Tracks = () => {
  return (
    <div>
      <AudioRecorder>
        {(props: any) => {
          return <Track {...props} />;
        }}
      </AudioRecorder>

      <AudioRecorder>
        {(props: any) => {
          return <Track {...props} />;
        }}
      </AudioRecorder>

      <AudioRecorder>
        {(props: any) => {
          return <Track {...props} />;
        }}
      </AudioRecorder>
    </div>
  );
};

export default Tracks;
