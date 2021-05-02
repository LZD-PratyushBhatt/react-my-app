import Dragon from "./Dragon/Dragon";
import { Component } from "react";

// IF you want to implement a check in shouldComponentUpdate that checks/Compare for all the props that matter
// to the component, then use PureComponent instead of Component, and dont use ShouldComponentUpdate.
class Dragons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   // 1
  //   console.log("[Dragons.js] getDerivedStateFromProps running...");
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // 2
    console.log("[Dragons.js] shouldComponentUpdateRunning...");
    return nextProps.dragons !== this.props.dragons;
    // return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 4
    console.log("[Dragons.js] getSnapBeforeUpdate running...");
    return { message: "Hello Sicilian" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 5
    console.log("[Dragons.js] componentDidUpdate running....");
    console.log(snapshot);
  }

  componentWillUnmount() {
    // CLEANUP WORK when a component is removed!!
    console.log("[Dragons.js] Component will unMount running...");
  }
  render() {
    // 3
    console.log("[Dragons.js] rendering.....");
    return this.props.dragons.map((variation, variationIndex) => {
      return (
        <Dragon
          name={variation.name}
          time={variation.time}
          clickPass={() => this.props.clicked(variationIndex)}
          nameChange={(event) => this.props.changed(event, variation.id)}
          key={variation.id}
        />
      );
    });
  }
}
export default Dragons;
