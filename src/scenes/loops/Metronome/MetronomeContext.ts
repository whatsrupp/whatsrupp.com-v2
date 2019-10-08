import createContext from "./createContext";
import * as types from "./types";

export const [useMetronomeContext, MetronomeContextProvider] = createContext<
  types.MetronomeContext
>();
