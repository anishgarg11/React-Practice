import React from "react";

export default function EventProps() {
  const Hello = (user) => {
    alert(`Hello ${user}`);
  };
  const HelloHover = () => {
    alert("Hello Guys");
  };

  return (
    <>
      <h1>Passing Events as Props</h1>
      {/* HelloUser is Child Components */}
      <HelloUser onAnish={() => Hello("Anish")} onMouseEnter={HelloHover} />
    </>
  );
}

const HelloUser = (props) => {

    //Destructuring
    const {onAnish, onMouseEnter} = props
  const HelloGreeting = () => {
    console.log("Hello Everyone");
    props.onAnish();
  };
  return (
    <>
      <button className="but" onClick={onAnish}>
        Click me!
      </button>
      <button className="but" onMouseEnter={onMouseEnter}>
        Hover
      </button>
      <button className="but" onClick={HelloGreeting}>
        Greeting
      </button>
    </>
  );
};
