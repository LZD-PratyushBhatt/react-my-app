import appClasses from "./App.module.css";
import { Component } from "react";
import Dragons from "../Components/Dragons/Dragons";
import Cockpit from "../Components/Cockpit/Cockpit";
class App extends Component {
  state = {
    dragon: [
      { id: "1", name: "Tarash Variation", time: 15 },
      { id: "2", name: "Dragon Variation of the Sicilian", time: 30 },
      { id: "3", name: "Morphy's defense of the Ruy Lopez", time: 5 },
    ],
    isVisible: false,
  };

  // FUNCTION AREA
  switchNameHandler = (newVariation) => {
    // console.log("I got clicked "+((this.i)++)+" times");
    // this.state.dragon[0].name="Exchange Variation";  DONT DO THIS use react Methods
    // setState is only available in class based components
    this.setState({
      dragon: [
        { name: newVariation, time: 25 },
        { name: "Dragon Variation of the Sicilian", time: 30 },
        { name: "Morphy's defense of the Ruy Lopez", time: 15 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const dragon = { ...this.state.dragon.find((el) => el.id === id) };
    const dragonIndex = this.state.dragon.findIndex((el) => el.id === id);
    const newDragonName = event.target.value;
    dragon.name = newDragonName;
    const dragonNew = [...this.state.dragon];
    dragonNew[dragonIndex] = dragon;

    this.setState({
      dragon: dragonNew,
    });
  };

  toggleNameHandler = () => {
    // const currentVisibility = this.state.isVisible;
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  deleteNameHandler = (variationIndex) => {
    const dragonNew = [...this.state.dragon];
    dragonNew.splice(variationIndex, 1);
    this.setState({
      dragon: dragonNew,
    });
  };

  // RENDER AREA

  // NOTE:Whenver react renders something to the screen , or when it decides to update something on the screen, it executes the render() method and
  // not just the return () expression, we can exploit that fact to write javascript code there.
  // NOTE: everything that is enclosed within ( ) is JSX code , like that in return ( xyz ), xyz is any JSX code.
  // NOTE: JSX code has only one parent element, and cannot have adjacent elements as parent. Thus enclose code within and DIV, and then create adjacent
  // child elements
  render() {
    let dragonVisibility = null;

    if (this.state.isVisible) {
      dragonVisibility = (
        <div>
          {/* Curly braces down below because its JSX and not JS */}
          <Dragons
            dragons={this.state.dragon}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={appClasses.App}>
        <Cockpit
          len={this.state.dragon.length}
          visible={this.state.isVisible}
          toggle={this.toggleNameHandler}
          title={this.props.appTitle}
        />
        {dragonVisibility}
      </div>
    );
  }
}

export default App;
