import React from "react";

import * as SC from "./styled";

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

  return <SC.Button onClick={handleClick}>{text}</SC.Button>;
};

export default SoundboardButton;
