export type createCueArguments = (createCueArguments: {
  cueCallback: (cueCallbackArguments: {
    audioContext: any;
    currentBeat: number;
    currentBar: number;
    currentBeatTime: number;
    cueFunctionAtTime: (callbackFunction: Function, time: number) => void;
    tempo: number;
    beatsInBar: number;
  }) => void;
  isRecurring: boolean;
}) => number;

export type TimingContextValuesType = {
  AudioContext: any;
  tempo: number;
  beatsInBar: number;
  createCue: createCueArguments;
};

export type cueCallbackArgumentsType = {
  audioContext: any;
  currentBeat: number;
  currentBar: number;
  currentBeatTime: number;
  cueFunctionAtTime: any;
  tempo: number;
  beatsInBar: number;
};

export type cueDefinitionType = {
  cueCallback: (args: {
    cueCallbackArguments: cueCallbackArgumentsType;
    isRecurring: boolean;
  }) => void;
  isRecurring: Boolean;
};

type MetronomeRenderProps = {
  onPlay: () => void;
  createCue: (cueDefinition: createCueArguments) => number;
  removeCue: (cueId: number) => void;
  startScheduler: () => any;
  stopScheduler: () => any;
  isPlaying: boolean;
  beat: number;
  bar: number;
};
