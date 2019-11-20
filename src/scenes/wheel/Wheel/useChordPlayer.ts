import { useState } from "react";
import { getChordFrequencies } from "./musicHelpers";
import { segmentClickEvent } from "./analytics";
export const useChordPlayer = () => {
  const [audioContext, setAudioContext] = useState(null);

  const constructChordPlayCallback = (key: any, mode: string): Function => {
    const callback = () => {
      segmentClickEvent(key, mode);
      let currentAudioContext = audioContext;
      if (!currentAudioContext) {
        currentAudioContext = new AudioContext();
        setAudioContext(currentAudioContext);
      }

      const frequencies = getChordFrequencies(key, 4, mode);
      const currentTime = currentAudioContext.currentTime;

      frequencies.forEach((frequency, i) => {
        let oscillator = currentAudioContext.createOscillator();
        oscillator.frequency.value = frequency;
        const startTime = currentTime + i / 5;
        const stopTime = currentTime + 1;
        oscillator.start(startTime);
        oscillator.stop(stopTime);
        oscillator.connect(currentAudioContext.destination);
      });
    };
    return callback;
  };

  return constructChordPlayCallback;
};

export default useChordPlayer;
