export const secondsPerBeat = (tempo: number) => {
  const secondsInMinute = 60.0;
  const beatsPerMinute = tempo;
  return secondsInMinute / beatsPerMinute;
};

export const secondsPerBar = (tempo: number, beatsInBar: number) => {
  const seconds = secondsPerBeat(tempo);
  const secondsPerBar = seconds * beatsInBar;
  return secondsPerBar;
};

export const nextBeatInBar = (beatNumber: number, beatsInBar: number) => {
  return beatNumber % beatsInBar;
};
