import React from "react";

function createContext<A>() {
  const context = React.createContext<A | undefined>(undefined);
  function useContext() {
    const c = React.useContext(context);
    if (!c)
      throw new Error("useContext must be inside a Provider with a value");
    return c;
  }
  return [useContext, context.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}

export default createContext;
