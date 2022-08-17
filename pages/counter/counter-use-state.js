import { useState } from "react";

const AddOneButton = ({ setCounter }) => {
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

const Counter = ({ counter }) => {
  return <div>counter : {counter}</div>;
};

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter} />
      <AddOneButton setCounter={setCounter} />
    </div>
  );
}
