import appClasses from "./App.module.css";
import { Component } from "react";
import Dragons from "../Components/Dragons/Dragons";
import Cockpit from "../Components/Cockpit/Cockpit";
class App extends Component {
  // First thing that executes
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    dragon: [
      { id: "1", name: "Tarash Variation", time: 15 },
      { id: "2", name: "Dragon Variation of the Sicilian", time: 30 },
      { id: "3", name: "Morphy's defense of the Ruy Lopez", time: 5 },
    ],
    isVisible: false,
    isCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    // 2. returns the updated state
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    //4. Allow us to make http request
    console.log("[App.js] componentDidMount");
  }

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
    const dragon = { ...this.state.dragon.find((el) => el.id === id) }; //Creating a dragon object and thus using rest
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
    // 3. Render occurs following rendering of all child components

    // If we type something, react renders App.js and then every child cmponent
    // gets rerender in Virtual DOM, react will check if it needs to touch the real
    //DOM, we cant prevent unnessesary renders, and that will be some optimisation.
    console.log("[App.js] render");
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
        <button
          onClick={() => {
            this.setState({
              isCockpit: !this.state.isCockpit,
            });
          }}
        >
          Remove Cockpit
        </button>
        { this.state.isCockpit?
          <Cockpit
            dragons={this.state.dragon}
            visible={this.state.isVisible}
            toggle={this.toggleNameHandler}
            title={this.props.appTitle}
          />:null
        }
        {dragonVisibility}
      </div>
    );
  }
}

export default App;
