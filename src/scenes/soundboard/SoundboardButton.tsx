import React from "react";
import { clickSoundboardButton } from "./analytics";
import * as SC from "./styled";

type SoundboardButtonProps = {
  audioFile: string;
  text: string;
  version: string;
};

const SoundboardButton: React.FC<SoundboardButtonProps> = ({
  audioFile,
  text,
  version
}) => {
  const audio = new Audio(audioFile);
  const handleClick = () => {
    audio.play();
    clickSoundboardButton();
  };

  let Button;
  switch (version) {
    case "1":
      Button = SC.ButtonV1;
      break;
    case "2":
      Button = SC.ButtonV2;
      break;
    case "3":
      Button = SC.ButtonV3;
      break;
  }

  return <Button onClick={handleClick}>{text}</Button>;
};

export default SoundboardButton;
