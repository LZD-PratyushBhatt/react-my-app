import CockpitClasses from "./Cockpit.module.css";
import { useEffect } from "react";

const Cockpit = (props) => {
  // useEffect is second most important React hook after useState, it combines the functionality or useCases od all these classbased lifecycle hook
  // in one React hook.
  // useEffect runs atleast one time, during the first render.
  useEffect(
    () => {
      // ComponentDidMount  + ComponentDidUpdate
      // Executes normally for every render cycle
      console.log("[Cockpit.js] useEffect running...");
      // Controlling the behavior of useEffect
      setTimeout(() => {
        alert("Saved data to cloud");
      }, 1000);
      // CLEAN UP WORK!!! , return an anonymous function that does the cleanUp work when a component is removed!
      // To be more precise this return function runs before the main UseEffect function runs, but after the first Render Cycle!
      return () => {
        // The execution of this return function depends on the second argument [] of useEffect!
        console.log("[Cockpit.js] CleanUp in Progress!");
      };
    },
    // If you want to add some update condition, then add second argument to useEffect which is an array that contains all the data which when changes, useEffect runs.
    // If you want useEffect to execute only once, then you have to pass empty array.This tells react that this effect has no dependencies, they can never
    // change and therefore this can never rerun.
    // [props.dragons] //UseEffect executes only when dragons is changed.
    [] //For useEffect to execute only one time. Ensures that the code is executed when the component is mounted and rendered for the first time and when it is unmounted!
  );

  useEffect(() => {
    // This useEffect runs for every update Cycle as it has no second argument!
    console.log("2nd useEffect!");
    return () => {
      console.log("[Cockpit.js] 2nd useEffect running...");
    };
  });

  // If we have different effects that depends on different data,
  // You can use useEffect more than once...

  const buttonClasses = [CockpitClasses.Button];
  if (props.visible) buttonClasses.push(CockpitClasses.Black);
  const classes = [];
  if (props.dragons.len <= 2) classes.push(CockpitClasses.blue);
  if (props.dragons.len <= 1) classes.push(CockpitClasses.bold);

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>Brown brown munde brown munde!!</p>
      <button
        onClick={props.toggle}
        className={buttonClasses.join(" ")}
        // altClass={this.state.isVisible} used for styled components
      >
        Toggle Variations
      </button>
    </div>
  );
};

export default Cockpit;
