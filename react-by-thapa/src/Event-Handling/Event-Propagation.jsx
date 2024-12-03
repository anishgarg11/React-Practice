// import React from "react";

// function EventPropagation() {
//   const handleGrandClick = () => {
//     console.log("Grandparent clicked!");
//   };

//   return (
//     <div onClickCapture={handleGrandClick}>
//       <ParentComponent />
//       <ChildComponent />
//     </div>
//   );
// }

// function ParentComponent() {
//   const ParentCompo = () => {
//     // event.stopPropagation();  // Stop the event from bubbling to the grandparent
//     console.log("Parent Clicked");
//   };

//   return (
//     <>
//       <h1>Event-Propagation</h1>
//       <button className="but" onClickCapture={ParentCompo}>
//         Parent
//       </button>
//     </>
//   );
// }

// function ChildComponent() {
//   const ChildCompo = () => {
//     // event.stopPropagation();  // Stop the event from bubbling to the parent or grandparent
//     console.log("Child Clicked");
//   };
//   return (
//     <>
//       <button className="but" onClickCapture={ChildCompo}>Child</button>
//     </>
//   );
// }

// export default EventPropagation;

import React from "react";

export default function EventPropagation() {
  const GrandparentClick = () => {
    console.log("Grandparent Clicked");
  };

  const ParentClick = () => {
    console.log("Parent Clicked");
  };

  const ChildClick = (event) => {
    console.log(event)
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    <>
      <section>
        <div className="but" onClickCapture={GrandparentClick}>
          Gprnt
          <div className="but" onClickCapture={ParentClick}>
            Parent
            <button className="but" onClickCapture={ChildClick}>
              Child
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
