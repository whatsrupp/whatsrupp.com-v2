//@ts-nocheck
import React, { useState, useEffect } from "react";

import * as SC from "./styled";
// import AudioRecorder from "./AudioRecorder";
import WaveSurfer from "wavesurfer.js";
import WithAudioRecorder from "./WithAudioRecorder";
interface ILoopsProps {
  AudioContext: any;
}

const Track: React.FC = ({
  isRecording,
  startRecording,
  stopRecording,
  audioUrl
}) => {
  const renderRecordingButton = () => {
    if (isRecording) {
      return <SC.StopRecordingButton onClick={stopRecording} />;
    } else {
      return <SC.StartRecordingButton onClick={startRecording} />;
    }
  };

  // const generateWaveProfile = (audioUrl: string) => {
  //   var wave = WaveSurfer.create({
  //     container: "#wave",
  //     fillParent: true,
  //     waveColor: "#dff302",
  //     progressColor: "#dff302"
  //   });
  //   wave.load(audioUrl);
  // };

  return (
    <div>
      <SC.Track id={"wave"}></SC.Track>
      {renderRecordingButton()}
      <audio src={audioUrl} controls />
    </div>
  );
};

export default Track;
