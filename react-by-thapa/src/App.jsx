import "./App.css";
import "./Components/Netflix.module.css";
import NetflixSeries from "./Components/NetflixSeries";
import Mobile from "./Component2/Mobile";
import Conditional from "./Conditional";
import BioData from "./Component3/BioData";
import Practices from "./Practices";
import Handlers from "./Event-Handling/Handlers";
import EventProps from "./Event-Handling/EventProps";
import EventPropagation from "./Event-Handling/Event-Propagation";
import { States } from "./Hooks/States";
import StatesQuestion from "./Hooks/States-Question";
import DerivesStates from "./Hooks/DerivesStates";
import { LiftingstateUp } from "./LiftStateUp";
import ToggleSwitch from "./Projects/ToggleSwitch/ToggleSwitch";
import Todo from  "./Projects/Todo/Todo"
function App() {
  return (
    <>
      <section className="container">
        {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
        {/* <NetflixSeries /> */}
      </section>
      {/* <Mobile /> */}

      {/* <Conditional /> */}
      {/* <BioData /> */}
      {/* <Practices /> */}
      {/* <Handlers /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <States /> */}
      {/* <SiblingComponent /> */}
      {/* <StatesQuestion /> */}
      {/* <DerivesStates /> */}
      {/* <LiftingstateUp /> */}
      {/* <ToggleSwitch /> */}
      <Todo/>
      {/* <Todoo/> */}
    </>
  );
}
export function SiblingComponent() {
  console.log("Sibling Compo Re-Render");
  return (
    <div>
      <h1>Sibling Component </h1>
    </div>
  );
}

export default App;
