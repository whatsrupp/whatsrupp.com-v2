import React, { useEffect, useState, useRef } from "react";

import * as SC from "./styled";
import { useMetronomeContext } from "../Metronome";
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
  const metronomeContext = useMetronomeContext();
  const [waveSurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const [isMuted, setIsMuted] = useState(null);

  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveformRef) return;

    if (!waveSurfer) {
      setWavesurfer(
        WaveSurfer.create({
          container: waveformRef.current,
          waveColor: "#DFF302",
          progressColor: "#DF2302",
          cursorColor: "white",
          fillParent: true,
          height: waveformRef.current.offsetHeight,
          normalize: true,
          AudioContext: metronomeContext.AudioContext,
          scrollParent: false,
          interact: false,
          responsive: true,
          plugins: [MicrophonePlugin.create({})]
        })
      );
    }

    if (audioUrl) {
      waveSurfer.load(audioUrl);
    }
  }, [
    waveSurfer,
    waveformRef,
    audioUrl,
    metronomeContext.AudioContext,
    startRecording,
    stopRecording
  ]);

  const handleRecordStart = () => {
    startRecording();
    waveSurfer.microphone.start();
  };

  const createPlayCue = () => {
    metronomeContext.createCue({
      cueCallback: ({ currentBeat }: any) => {
        if (currentBeat === 0) {
          waveSurfer.play();
        }
      },
      isRecurring: true
    });
    setIsPlaying(true);
  };

  const handleRecordEnd = () => {
    stopRecording();
    waveSurfer.microphone.stop();
    createPlayCue();
  };

  const renderRecordingButton = () => {
    const handleRecordStartClick = () => {
      metronomeContext.createCue({
        cueCallback: ({
          currentBeat,
          cueFunctionAtTime,
          currentBeatTime,
          tempo,
          beatsInBar
        }) => {
          const secondsPerBeat = 60 / tempo;
          const secondsPerBar = secondsPerBeat * beatsInBar;

          const beatsUntilNewBar = beatsInBar - currentBeat;
          const secondsUntilNewBar = secondsPerBeat * beatsUntilNewBar;
          const timeOfStartOfNextBar = currentBeatTime + secondsUntilNewBar;
          const timeOfEndOfNextBar = timeOfStartOfNextBar + secondsPerBar;
          cueFunctionAtTime(handleRecordStart, timeOfStartOfNextBar);
          cueFunctionAtTime(handleRecordEnd, timeOfEndOfNextBar);
        },
        isRecurring: false
      });
    };

    const handleRecordStopClick = () => {
      // waveSurfer.microphone.stop();
      // stopRecording();
    };

    if (isRecording) {
      return <SC.StopRecordingButton onClick={handleRecordStopClick} />;
    } else {
      return <SC.StartRecordingButton onClick={handleRecordStartClick} />;
    }
  };

  const renderMuteButton = () => {
    const Icon = isMuted ? SC.VolumeMutedIcon : SC.VolumeUpIcon;

    return (
      <div
        onClick={() => {
          waveSurfer.toggleMute();
          setIsMuted(!isMuted);
        }}
      >
        <Icon />
      </div>
    );
  };

  return (
    <React.Fragment>
      <SC.TrackWrapper>
        <SC.WaveformContainer ref={waveformRef}></SC.WaveformContainer>
        <SC.ControlsContainer>
          <SC.RecordingButtonContainer>
            {renderRecordingButton()}
          </SC.RecordingButtonContainer>
          <SC.MuteContainer>{renderMuteButton()}</SC.MuteContainer>
        </SC.ControlsContainer>
      </SC.TrackWrapper>
    </React.Fragment>
  );
};

export default Track;
