// import { createContext } from "react";
import { useCallback, useState, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";
const useStore = () => {
  const [counter, setCounter] = useState(0);
  return {
    counter,
    addCounter: useCallback(() => setCounter((val) => val + 1), []),
    subtractCounter: useMemo(() => () => setCounter((val) => val - 1), []),
  };
};

const counterContext = createContext(null);

export const CounterContextProvider = ({ children }) => {
  return (
    <counterContext.Provider value={useStore()}>
      {children}
    </counterContext.Provider>
  );
};

export const useSubtractCounter = () =>
  useContextSelector(counterContext, (state) => state.subtractCounter);
export const useAddCounter = () =>
  useContextSelector(counterContext, (state) => state.addCounter);
export const useCounter = () =>
  useContextSelector(counterContext, (state) => state.counter);
