import { useState } from "react";
import { segmentClickEvent } from "./analytics";
import playChord from "./playChord";

export const useChordPlayer = () => {
  const [audioContext, setAudioContext] = useState(null);

  const getAudioContext = () => {
    let currentAudioContext = audioContext;
    if (!currentAudioContext) {
      window.AudioContext =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      currentAudioContext = new AudioContext();
      setAudioContext(currentAudioContext);
    }
    return currentAudioContext;
  };
  const constructChordPlayCallback = (key: any, mode: string): Function => {
    const callback = () => {
      segmentClickEvent(key, mode);
      playChord({ key, mode, context: getAudioContext() });
    };
    return callback;
  };

  return constructChordPlayCallback;
};

export default useChordPlayer;
