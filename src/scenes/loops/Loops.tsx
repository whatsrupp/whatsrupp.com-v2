import React from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Track from "./Track";
// import getAudioRecorder from "./getAudioRecorder";
import AudioRecorder from "./WithAudioRecorder";
interface ILoopsProps {}
interface ILoopsState {
  isRecording: boolean;
  audioUrl: string;
}

class Loops extends React.Component<ILoopsProps, ILoopsState> {
  constructor(props: ILoopsProps) {
    super(props);

    this.state = {
      isRecording: false,
      audioUrl: ""
    };
  }

  // componentDidMount = async () => {
  //   // const AudioContext = await getAudioRecorder();
  //   // this.setState({ AudioContext });
  // };

  // startRecording = () => {
  //   const { AudioContext } = this.state;
  //   AudioContext.start();
  //   this.setState({ isRecording: true });
  // };

  // stopRecording = () => {
  //   const { AudioContext } = this.state;
  //   AudioContext.stop((audioUrl: string) => {
  //     this.setState({ audioUrl });
  //   });
  //   this.setState({ isRecording: false });
  // };

  // onRecordClick = async () => {};

  // renderRecordingButton = () => {
  //   const { isRecording } = this.state;

  //   if (isRecording) {
  //     return <SC.StopRecordingButton onClick={this.stopRecording} />;
  //   } else {
  //     return <SC.StartRecordingButton onClick={this.startRecording} />;
  //   }
  // };

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
          <AudioRecorder>
            {props => {
              console.log("props", props);
              return <Track {...props} />;
            }}
          </AudioRecorder>

          <AudioRecorder>
            {props => {
              console.log("props", props);
              return <Track {...props} />;
            }}
          </AudioRecorder>
          {/* {this.renderRecordingButton()} */}
        </SC.Body>
        <SC.Footer></SC.Footer>
      </SC.PageLayout>
    );
  }
}

export default Loops;
