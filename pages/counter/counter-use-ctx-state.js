import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((v) => v + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>counter : {counter}</div>;
};

export default function CounterUseCtxState() {
  return (
    <CounterContextProvider>
      <Counter />
      <AddOneButton />
    </CounterContextProvider>
  );
}
