import { getNoteFrequency, getChordFrequencies } from "./musicHelpers";
import { KEYS, MODES } from "../Camelot/constants";

describe("getNoteFrequency", () => {
  it("handles A4", () => {
    const frequency = getNoteFrequency(KEYS.A, 4);
    expect(frequency).toEqual(440);
  });
  it("handles C4", () => {
    const frequency = getNoteFrequency(KEYS.C, 4);
    expect(frequency).toBeCloseTo(261.63, 2);
  });
});

describe("getChordFrequencies", () => {
  describe("major chords", () => {
    it("handles C4major", () => {
      const frequencies = getChordFrequencies(KEYS.C, 4, MODES.major);
      const [first, third, fifth] = frequencies;
      expect(first).toBeCloseTo(261.63, 2);
      expect(third).toBeCloseTo(329.63, 2);
      expect(fifth).toBeCloseTo(392.0, 2);
    });

    it("handles C4minor", () => {
      const frequencies = getChordFrequencies(KEYS.C, 4, MODES.minor);
      const [first, third, fifth] = frequencies;
      expect(first).toBeCloseTo(261.63, 2);
      expect(third).toBeCloseTo(311.13);
      expect(fifth).toBeCloseTo(392.0, 2);
    });
  });
});
