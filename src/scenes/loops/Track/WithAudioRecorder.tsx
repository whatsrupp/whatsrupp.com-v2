import React from "react";

type AudioRecorderProps = {
  children: (args: {
    audioUrl: string;
    isRecording: boolean;
    stopRecording: () => void;
    startRecording: () => void;
  }) => React.ReactNode;
};

type AudioRecorderState = {
  isRecording: boolean;
  AudioRecorder: any;
  audioUrl: string;
  audioChunks: any;
};

declare const MediaRecorder: any;

class AudioRecorder extends React.Component<
  AudioRecorderProps,
  AudioRecorderState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      AudioRecorder: null,
      audioChunks: [],
      audioUrl: "",
      isRecording: false
    };
  }

  componentDidMount = async () => {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    const AudioRecorder = new MediaRecorder(audioStream);
    this.setState({ AudioRecorder });

    AudioRecorder.addEventListener("dataavailable", (event: { data: any }) => {
      const newAudioChunks = [...this.state.audioChunks, event.data];
      this.setState({ audioChunks: newAudioChunks });
    });

    AudioRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(this.state.audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      this.setState({ audioUrl });
    });
  };

  startRecording = () => {
    const { AudioRecorder } = this.state;
    this.setState({ audioChunks: [] });
    AudioRecorder.start();
    this.setState({ isRecording: true });
  };

  stopRecording = () => {
    const { AudioRecorder } = this.state;
    this.setState({ isRecording: false });
    AudioRecorder.stop();
  };

  render() {
    return this.props.children({
      audioUrl: this.state.audioUrl,
      isRecording: this.state.isRecording,
      stopRecording: this.stopRecording,
      startRecording: this.startRecording
    });
  }
}

interface withAudioRecorderProps {
  audioUrl: string;
  isRecording: boolean;
  stopRecording: () => void;
  startRecording: () => void;
}

export function withAudioRecorder<
  T extends withAudioRecorderProps = withAudioRecorderProps
>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  return class ComponentWithAudioRecorder extends React.Component<T> {
    public static displayName = `withAudioRecorder(${displayName})`;

    public render() {
      return (
        <AudioRecorder>
          {audioRecorderProps => {
            return (
              <WrappedComponent
                {...audioRecorderProps}
                {...(this.props as T)}
              />
            );
          }}
        </AudioRecorder>
      );
    }
  };
}

export default AudioRecorder;
