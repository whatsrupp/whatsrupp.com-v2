import { getChordFrequencies } from "./musicHelpers";
type PlayChordArgs = {
  key: number;
  mode: string;
  context: AudioContext;
};

const playChord = ({ key, mode, context }: PlayChordArgs) => {
  const frequencies = getChordFrequencies(key, 4, mode);
  const currentTime = context.currentTime;
  const stagger = 0.2;
  frequencies.forEach((frequency, i) => {
    let oscillator = context.createOscillator();
    oscillator.frequency.value = frequency;
    const startTime = currentTime + i * stagger;
    const stopTime = currentTime + (i + 1) * stagger;
    oscillator.start(startTime);
    oscillator.stop(stopTime);
    oscillator.connect(context.destination);
  });
};

export default playChord;
