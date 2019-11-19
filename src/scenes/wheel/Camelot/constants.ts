export const KEYS = {
  C: 0,
  Cs: 1,
  Db: 1,
  D: 2,
  Ds: 3,
  Eb: 3,
  E: 4,
  F: 5,
  Fs: 6,
  Gb: 6,
  G: 7,
  Gs: 8,
  Ab: 8,
  A: 9,
  As: 10,
  Bb: 10,
  B: 11
};

export enum KeysEnum {
  C = 0,
  Cs = 1,
  Db = 1,
  D = 2,
  Ds = 3,
  Eb = 3,
  E = 4,
  F = 5,
  Fs = 6,
  Gb = 6,
  G = 7,
  Gs = 8,
  Ab = 8,
  A = 9,
  As = 10,
  Bb = 10,
  B = 11
}

export const MODES = {
  major: "major",
  minor: "minor"
};

export enum ModesEnum {
  major = "major",
  minor = "minor"
}

export const CamelotWheel = [
  {
    major: { position: 0, key: KEYS.E, display: "E", mode: MODES.major },
    minor: { position: 0, key: KEYS.Db, display: "D♭", mode: MODES.minor }
  },
  {
    major: { position: 1, key: KEYS.B, display: "B", mode: MODES.major },
    minor: { position: 1, key: KEYS.Ab, display: "A♭", mode: MODES.minor }
  },
  {
    major: { position: 2, key: KEYS.Fs, display: "F♯", mode: MODES.major },
    minor: { position: 2, key: KEYS.Eb, display: "E♭", mode: MODES.minor }
  },
  {
    major: { position: 3, key: KEYS.Db, display: "D♭", mode: MODES.major },
    minor: { position: 3, key: KEYS.Bb, display: "B♭", mode: MODES.minor }
  },
  {
    major: { position: 4, key: KEYS.Ab, display: "A♭", mode: MODES.major },
    minor: { position: 4, key: KEYS.F, display: "F", mode: MODES.minor }
  },
  {
    major: { position: 5, key: KEYS.Eb, display: "E♭", mode: MODES.major },
    minor: { position: 5, key: KEYS.C, display: "C", mode: MODES.minor }
  },
  {
    major: { position: 6, key: KEYS.Bb, display: "B♭", mode: MODES.major },
    minor: { position: 6, key: KEYS.G, display: "G", mode: MODES.minor }
  },
  {
    major: { position: 7, key: KEYS.F, display: "F", mode: MODES.major },
    minor: { position: 7, key: KEYS.D, display: "D", mode: MODES.minor }
  },
  {
    major: { position: 8, key: KEYS.C, display: "C", mode: MODES.major },
    minor: { position: 8, key: KEYS.A, display: "A", mode: MODES.minor }
  },
  {
    major: { position: 9, key: KEYS.G, display: "G", mode: MODES.major },
    minor: { position: 9, key: KEYS.E, display: "E", mode: MODES.minor }
  },
  {
    major: { position: 10, key: KEYS.D, display: "D", mode: MODES.major },
    minor: { position: 10, key: KEYS.B, display: "B", mode: MODES.minor }
  },
  {
    major: { position: 11, key: KEYS.A, display: "A", mode: MODES.major },
    minor: { position: 11, key: KEYS.Fs, display: "F♯", mode: MODES.minor }
  }
];
