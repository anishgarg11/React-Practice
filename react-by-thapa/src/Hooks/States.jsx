import { useState } from "react";

export const States = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component Re-Render");

  const handleIncrement = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="but" onClick={handleIncrement}>
        Increment
      </button>
      <ChildComponent/>
    </>
  );
};

function ChildComponent() {
  console.log("Child Compo Re-Render");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}


