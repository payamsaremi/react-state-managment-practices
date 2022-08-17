import {
  CounterContextProvider,
  useCounter,
  useAddCounter,
  useSubtractCounter,
} from "./store-practice-counter";

const AddButton = () => {
  const add = useAddCounter();

  return (
    <div>
      <button
        onClick={() => {
          add();
        }}
      >
        Add
      </button>
    </div>
  );
};

const SubtractButton = () => {
  const subtract = useSubtractCounter();
  return (
    <div>
      <button
        onClick={() => {
          subtract();
        }}
      >
        Subtract
      </button>
    </div>
  );
};

const Counter = () => {
  const counter = useCounter();
  return <div>counter: {counter}</div>;
};

const PracticeCounter = () => {
  return (
    <div>
      <AddButton />
      <SubtractButton />
      <Counter />
    </div>
  );
};

export default function PracticeCounterWrapper() {
  return (
    <CounterContextProvider>
      <PracticeCounter />
    </CounterContextProvider>
  );
}
