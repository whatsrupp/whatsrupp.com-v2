import React, { useState } from "react";
import * as SC from "./styled";
import metronomeIcon from "../assets/icons/metronome.svg";
import { useTimingContext } from "../Loops";

import { cueCallbackArgumentsType } from "../types";

const metronomeCue = ({
  audioContext,
  currentBeatTime
}: cueCallbackArgumentsType) => {
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
  const timingContext = useTimingContext();

  const startMetronome = () => {
    const cueId = timingContext.createCue({
      cueCallback: metronomeCue,
      isRecurring: true
    });
    setCueId(cueId);
  };

  const stopMetronome = () => {
    timingContext.removeCue(cueId);
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
