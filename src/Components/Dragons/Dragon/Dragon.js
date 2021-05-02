import dragonClasses from "./Dragon.module.css";
import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
// import styled from "styled-components";
// import Radium from "radium";

// NOTE: style.x returns a component, so no need to make a traditional component function, as its already returned, just store it in a variable.
// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (max-width: 800px) {
//     width: 450px;
//     background-color: red;
//   }
// `;

class Dragon extends Component {
  // const style = {
  //   "@media (max-width:800px) ": {
  //     width: "450px",
  //     // backgroundColor:'red'
  //   },
  // };
  render() {
    console.log("[Dragon.js] rendering.....");

    return (
      // <div className={dragonClasses.Dragon}>
      // React has a built in Aux like HOC, its called React.Fragment
      // <React.Fragment>
      <Aux>
        <p onClick={this.props.clickPass}>
          Playing the {this.props.name} for the {this.props.time} times!!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChange}
          value={this.props.name}
        />

      </Aux>
      // </React.Fragment>

    );
  }
}

export default withClass(Dragon,dragonClasses.Dragon);
