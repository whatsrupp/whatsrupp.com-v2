import React, { Component } from "react";
import { Button } from "./styled";
// import Fab from './Fab.mp4'

// class SoundboardButton extends Component {
//   constructor(props) {
//     super(props);
//     this.audio = new Audio(this.props.soundbite);
//   }

//   handleButtonClick = () => {
//     console.log(this.audio);
//     this.audio.play();
//   };

//   render = () => {
//     return <Button onClick={this.handleButtonClick}>{this.props.text}</Button>;
//   };
// }

type SoundboardButtonProps = {
  audioFile: string;
  text: string;
};

const SoundboardButton: React.FC<SoundboardButtonProps> = ({
  audioFile,
  text
}) => {
  const audio = new Audio(audioFile);
  const handleClick = () => {
    audio.play();
  };

  return <Button onClick={handleClick}>{text}</Button>;
};
export default SoundboardButton;
