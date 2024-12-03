import React from "react";
import  "./Handlers.css"
function Handlers() {
//   function handlers() {
//     alert("I'm onClick Events");
//   }

  const handlers = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("I'm onClick Events");
  };

  const handleWelcomeUser=(user)=>{
    console.log(`Hey ${user}, Welcome To my React course`)
  }

  return (
    <>
    <h1>Event Handling</h1>
      {/* Function Components with Named Functions */}
      <button className="but" onClick={handlers}>Click me!</button>

      {/* Function Components With Fet Arrow or Inline  Functions call as a "function()"*/}
      <button className="but" onClick={(event) => handlers(event)}>Click me! 2</button>

      {/* Inline Event handlers */}
      <button className="but" onClick={(event) => console.log(event)}>Inline Function</button>

      {/* Function Components with Inline Arrow Functions */}
      <button className="but" onClick={() => alert("I'm Inline Event function")}>Inline Arrow Function</button>

      {/* Passing arguments to Event handlers */}
      <button className="but" onClick={()=>handleWelcomeUser("Anish")}>Click Me!</button>
      <button className="but" onClick={()=>handleWelcomeUser("Ramz")}>Click Me!</button>
    </>

  );
}

export default Handlers;
