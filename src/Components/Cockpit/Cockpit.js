import CockpitClasses from "./Cockpit.module.css";

const Cockpit = (props) => {
  const buttonClasses = [CockpitClasses.Button];
  if (props.visible) buttonClasses.push(CockpitClasses.Black);
  const classes = [];
  if (props.len <= 2) classes.push(CockpitClasses.blue);
  if (props.len <= 1) classes.push(CockpitClasses.bold);

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
