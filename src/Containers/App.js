// import logo from "./logo.svg";
import appClasses from  "./App.module.css";
// import Radium,{StyleRoot} from "radium";
import { Component } from "react";
import Dragon from "../Components/Dragons/Dragon/Dragon";
// import styled from "styled-components";
// import Phone from "./Phone/Phone";

// const StyledButton = styled.button`
//   background-color: ${(props) => {
//     return props.altClass ? "green" : "black";
//   }};
//   color: white;
//   border: 2px solid gray; 
//   padding: 3px;
//   margin: 20px;  
//   cursor: pointer;
//   font: inherit;       

//   &:hover {
//     background-color: ${(props) => {
//       return props.altClass ? "lightgreen" : "grey";
//     }};
//     color: purple;
//   }
// `;

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
    const dragon = {...this.state.dragon.find((el) => el.id === id) };
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
    //adding a inline stylesheet, note you can name the vaiable whatever you want, inside CSS property are named as CamelCase

    // const style = {
    // backgroundColor: "green",
    // color: "white",
    // border: "2px solid gray",
    // padding: "3px",
    // margin: "20px",
    // cursor: "pointer",
    // font: "inherit",
    // ":hover": {
    //   backgroundColor: "lightgreen",
    //   color: "yellow",
    // },
    // };
    //
    let dragonVisibility = null;
    const buttonClasses = [appClasses.Button];

    if (this.state.isVisible) {
      dragonVisibility = (
        <div>
          {/* Curly braces down below because its JSX and not JS */}
          {this.state.dragon.map((variation, variationIndex) => {
            return (
              <Dragon
                name={variation.name}
                time={variation.time}
                clickPass={() => this.deleteNameHandler(variationIndex)}
                nameChange={(event) =>
                  this.nameChangeHandler(event, variation.id)
                }
                key={variation.id}
              />
            );
          })}

          {/* <Dragon
            name={this.state.dragon[0].name}
            time={this.state.dragon[0].time}
          />
          <Dragonid:'', 
            name={this.state.dragon[1].name}
            time={this.state.dragon[1].time}
            clickPass={this.switchNameHandler.bind(this, "Najdorf Variation")}
            changed={this.nameChangeHandler}
          >
            This one is my Favourite!
          </Dragon>
          <Dragon
            name={this.state.dragon[2].name}
            time={this.state.dragon[2].time}
          /> */}
        </div>
      );

      // style.backgroundColor = "black";
      // style[":hover"] = {
      //   backgroundColor: "grey",
      //   color: "purple",
      // };
      buttonClasses.push(appClasses.Black);
    }

    const classes = [];
    if (this.state.dragon.length <= 2) classes.push(appClasses.blue);
    if (this.state.dragon.length <= 1) classes.push(appClasses.bold);

    return (
      // <StyleRoot>
      <div className={appClasses.App}>
        <h1>Hii,This is Pratyush Bhatt</h1>
        <p className={classes.join(" ")}>Brown brown munde brown munde!!</p>
        <button
          onClick={this.toggleNameHandler}
          className={buttonClasses.join(' ')}
          // altClass={this.state.isVisible} used for styled components

        >
          Toggle Variations
        </button>
        {dragonVisibility}

        {/* <Phone name="Samsung Galaxy S20+ BTS Edition" cost="Rs.87,000" />
        <Phone name="Iphone 12 mini" cost="Rs.70,000">
          This is a children of Phone element
        </Phone> */}
      </div>
      //  </StyleRoot>
    );
    //  return(
    //    React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello thrree, its Pratyush'))
    //  );
  }
}

export default App;



























// USING THE FUNCTIONAL COMPONENTS
// import {useState} from "react";
// function App() {
//   return (
//     <div className="App">
//       <h1>Hey there, it's Pratyush here!!</h1>
//     </div>
//   );
// }

// const App = () => {
//   // useState returns an array with exactly two elements, ALWAYS TWO ELEMENTS, first is our current state object,second is the function which allows us
//   // to update this state such that react is aware of it, and rerender this component if its updated
//   const [dragonState, setDragonState] = useState({
//     dragon: [
//       { name: "Tarash Variation", time: 15 },
//       { name: "Dragon Variation of the Sicilian", time: 30 },
//       { name: "Morphy's defense of the Ruy Lopez", time: 5 },
//     ],
//     // otherState:'Some other value'
//   });

//   const [otherState, setOtherState] = useState("This is other state");
//   const switchNameHandler = () => {
//     // console.log("I got clicked "+((this.i)++)+" times");
//     // this.state.dragon[0].name="Exchange Variation";  DONT DO THIS use react Methods
//     // NOTE: react hook fucntion replaces the old state, and doesnt merge with the old state.
//     setDragonState({
//       dragon: [
//         { name: "Exchange Variation of the Queens Gambit", time: 25 },
//         { name: "Dragon Variation of the Sicilian", time: 30 },
//         { name: "Morphy's defense of the Ruy Lopez", time: 15 },
//       ],
//     });
//   };
//   console.log(dragonState, otherState);
//   return (
//     <div className="App">
//       <h1>Hii,This is Pratyush Bhatt</h1>
//       <button onClick={switchNameHandler}>Switch Names</button>
//       <Dragon
//         name={dragonState.dragon[0].name}
//         time={dragonState.dragon[0].time}
//       />
//       <Dragon
//         name={dragonState.dragon[1].name}
//         time={dragonState.dragon[1].time}
//       >
//         This one is my Favourite!
//       </Dragon>
//       <Dragon
//         name={dragonState.dragon[2].name}
//         time={dragonState.dragon[2].time}
//       />
//       <Phone name="Samsung Galaxy S20+ BTS Edition" cost="Rs.87,000" />
//       <Phone name="Iphone 12 mini" cost="Rs.70,000">
//         This is a children of Phone element
//       </Phone>
//     </div>
//   );
//   //  return(
//   //    React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello thrree, its Pratyush'))
//   //  );
// };

// export default App;
