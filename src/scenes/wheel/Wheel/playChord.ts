import { getChordFrequencies } from "./musicHelpers";
type PlayChordArgs = {
  stagger: number;
  key: number;
  mode: string;
  context: AudioContext;
};

const playChord = ({ stagger, key, mode, context }: PlayChordArgs) => {
  const frequencies = getChordFrequencies(key, 4, mode);
  const currentTime = context.currentTime;
  frequencies.forEach((frequency, i) => {
    let oscillator = context.createOscillator();
    oscillator.frequency.value = frequency;
    const startTime = currentTime + i * stagger;
    const stopTime = currentTime + 1;
    oscillator.start(startTime);
    oscillator.stop(stopTime);
    oscillator.connect(context.destination);
  });
};

export default playChord;
