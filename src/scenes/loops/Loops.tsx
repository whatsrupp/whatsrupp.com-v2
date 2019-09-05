import React from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
import AudioRecorder from "./AudioRecorder";

interface ILoopsProps {}
interface ILoopsState {
  isRecording: boolean;
  AudioContext: any;
  audioUrl: string;
}

class Loops extends React.Component<ILoopsProps, ILoopsState> {
  constructor(props: ILoopsProps) {
    super(props);

    this.state = {
      isRecording: false,
      AudioContext: null,
      audioUrl: ""
    };
  }
  componentDidMount = async () => {
    const AudioContext = await AudioRecorder();
    this.setState({ AudioContext });
  };

  onRecordClick = async () => {
    const { isRecording, AudioContext } = this.state;

    if (isRecording) {
      AudioContext.stop((audioUrl: string) => {
        this.setState({ audioUrl });
      });
    } else {
      AudioContext.start();
    }
    this.setState({ isRecording: !isRecording });
  };

  render() {
    return (
      <SC.PageLayout>
        <SC.Header>
          <SC.Head src={images.jack} />
          <SC.Head src={images.nick} />
          <SC.Logo src={images.logo} />
          <SC.Head src={images.will} />
          <SC.Head src={images.viv} />
        </SC.Header>
        <SC.Body>
          <Track />
          <audio src={this.state.audioUrl} controls />
        </SC.Body>
        <SC.Footer>
          <SC.RecordButton onClick={this.onRecordClick} />
        </SC.Footer>
      </SC.PageLayout>
    );
  }
}

export default Loops;
