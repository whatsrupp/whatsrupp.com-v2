import React, { useEffect, useState, useContext } from "react";

import * as SC from "./styled";
import { TimingContext } from "./Loops";
import WaveSurfer from "wavesurfer.js";
import MicrophonePlugin from "wavesurfer.js/src/plugin/microphone.js";
interface ITrackProps {
  isRecording: boolean;
  startRecording: any;
  stopRecording: any;
  audioUrl: string;
}

const Track: React.FC<ITrackProps> = ({
  isRecording,
  startRecording,
  stopRecording,
  audioUrl
}) => {
  const timingContext = useContext(TimingContext);
  const [waveSurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);

  useEffect(() => {
    if (!waveSurfer) {
      setWavesurfer(
        WaveSurfer.create({
          container: "#waveform",
          waveColor: "#DFF302",
          progressColor: "#DF2302",
          cursorColor: "white",
          fillParent: true,
          height: 150,
          normalize: true,
          AudioContext: timingContext.AudioContext,
          scrollParent: false,
          interact: false,
          splitChannels: true,
          plugins: [
            MicrophonePlugin.create({
              // plugin options ...
            })
          ]
        })
      );
    }

    if (audioUrl) {
      waveSurfer.load(audioUrl);
    }
  }, [
    waveSurfer,
    audioUrl,
    timingContext.AudioContext,
    startRecording,
    stopRecording
  ]);

  const renderRecordingButton = () => {
    const handleRecordStartClick = () => {
      console.log(startRecording);
      startRecording();

      waveSurfer.microphone.start();
    };

    const handleRecordStopClick = () => {
      console.log("microphone", waveSurfer.microphone);
      waveSurfer.microphone.stop();
      stopRecording();
    };

    if (isRecording) {
      return <SC.StopRecordingButton onClick={handleRecordStopClick} />;
    } else {
      return <SC.StartRecordingButton onClick={handleRecordStartClick} />;
    }
  };

  const renderPlayButton = () => {
    if (!isPlaying) {
      return (
        <SC.PlayButton
          onClick={() => {
            waveSurfer.play();
            setIsPlaying(true);
          }}
        >
          <SC.PlayIcon />
        </SC.PlayButton>
      );
    } else {
      return (
        <SC.PlayButton
          onClick={() => {
            waveSurfer.pause();
            setIsPlaying(false);
          }}
        >
          <SC.PauseIcon />
        </SC.PlayButton>
      );
    }
  };

  return (
    <React.Fragment>
      <SC.Track id={"waveform"}></SC.Track>
      {renderRecordingButton()}
      {renderPlayButton()}
    </React.Fragment>
  );
};

export default Track;
