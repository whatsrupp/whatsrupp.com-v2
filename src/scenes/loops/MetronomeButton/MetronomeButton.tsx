import React, { useState } from "react";
import * as SC from "./styled";
import metronomeIcon from "../assets/icons/metronome.svg";
import { useMetronomeContext } from "../Metronome";

import { types } from "../Metronome";

const metronomeCue = ({
  audioContext,
  currentBeatTime
}: types.cueCallbackArguments) => {
  const osc = audioContext.createOscillator();
  osc.connect(audioContext.destination);

  osc.frequency.value = 220.0;
  const noteLength = 0.05;
  osc.start(currentBeatTime);
  osc.stop(currentBeatTime + noteLength);
};

const Metronome = () => {
  const [isActive, setIsActive] = useState(false);
  const [cueId, setCueId] = useState(null);
  const metronomeContext = useMetronomeContext();

  const startMetronome = () => {
    const cueId = metronomeContext.createCue({
      cueCallback: metronomeCue,
      isRecurring: true
    });
    setCueId(cueId);
  };

  const stopMetronome = () => {
    metronomeContext.removeCue(cueId);
  };

  const handleClick = () => {
    if (isActive) {
      stopMetronome();
    } else {
      startMetronome();
    }

    setIsActive(!isActive);
  };

  return <SC.MetronomeIcon src={metronomeIcon} onClick={handleClick} />;
};

export default Metronome;
