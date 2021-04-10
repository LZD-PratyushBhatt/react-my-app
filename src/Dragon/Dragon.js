// import "./Dragon.css";
import styled from "styled-components";
// import Radium from "radium";




// NOTE: style.x returns a component, so no need to make a traditional component function, as its already returned, just store it in a variable.
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (max-width: 800px) {
    width: 450px;
    background-color: red;
  }
`;

const dragon = (props) => {
  // const style = {
  //   "@media (max-width:800px) ": {
  //     width: "450px",
  //     // backgroundColor:'red'
  //   },
  // };

  return (
    <StyledDiv>
      <p onClick={props.clickPass}>
        Playing the {props.name} for the {props.time} times!!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChange} value={props.name} />
    </StyledDiv>
  );
};

export default dragon;
