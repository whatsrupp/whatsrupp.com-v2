import React from "react";
import { Button } from "./styled";

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
