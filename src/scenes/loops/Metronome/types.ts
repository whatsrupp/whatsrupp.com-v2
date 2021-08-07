export type cueCallbackArguments = {
  audioContext: any;
  currentBeat: number;
  currentBar: number;
  currentBeatTime: number;
  cueFunctionAtTime: (callbackFunction: Function, time: number) => void;
  tempo: number;
  beatsInBar: number;
};

export type createCue = (createCueArguments: {
  cueCallback: (cueCallbackArguments: cueCallbackArguments) => void;
  isRecurring: boolean;
}) => number;

export type TimingContextValuesType = {
  AudioContext: any;
  tempo: number;
  beatsInBar: number;
  createCue: createCue;
  removeCue: (cueId: number) => void;
};

export type MetronomeContext = {
  AudioContext: any;
  tempo: number;
  beatsInBar: number;
  createCue: createCue;
  removeCue: (cueId: number) => void;
};

export type cueDefinitionType = {
  cueCallback: (args: {
    cueCallbackArguments: cueCallbackArguments;
    isRecurring: boolean;
  }) => void;
  isRecurring: Boolean;
};

export type MetronomeProps = {
  tempo: number;
  beatsInBar: number;
  numberOfBars: number;
  children: React.ReactNode;
};

export type MetronomeState = {
  isPlaying: boolean;
  beat: number;
  bar: number;
};
