import { MODES, KeysEnum } from "../Camelot/constants";

const getSemiTonesAwayFromA0 = (key: KeysEnum, octave: number) => {
  const note = key - 9;
  const multiplier = octave - 4;
  const semitonesAwayFromA0 = note + multiplier * 12;
  return semitonesAwayFromA0;
};

const calculateFrequencyFromSemitonesAwayFromA0 = (
  semitonesAwayFromA0: number
) => {
  // // fn = f0 * (a)n
  // // f0 = the frequency of one fixed note which must be defined. A common choice is setting the A above middle C (A4) at f0 = 440 Hz.
  // // n = the number of half steps away from the fixed note you are. If you are at a higher note, n is positive. If you are on a lower note, n is negative.
  // // fn = the frequency of the note n half steps away.
  // // a = (2)1/12 = the twelth root of 2 = the number which when multiplied by itself 12 times equals 2 = 1.059463094359...
  const f0 = 440;
  const a = Math.pow(2, 1 / 12);
  const frequency = f0 * Math.pow(a, semitonesAwayFromA0);
  return frequency;
};

export const getNoteFrequency = (key: KeysEnum, octave: number) => {
  const semitonesAwayFromA0 = getSemiTonesAwayFromA0(key, octave);
  return calculateFrequencyFromSemitonesAwayFromA0(semitonesAwayFromA0);
};

export const getChordFrequencies = (
  key: KeysEnum,
  octave: number,
  mode: string
) => {
  const first = getSemiTonesAwayFromA0(key, octave);
  const thirdInterval = mode === MODES.major ? 4 : 3;
  const third = first + thirdInterval;
  const fifthInterval = 7;
  const fifth = first + fifthInterval;
  return [first, third, fifth].map(note => {
    return calculateFrequencyFromSemitonesAwayFromA0(note);
  });
};
