
// METHOD 1
// const WithClass = props=>(
//   <div className={props.classes}>
//       {props.children}
//   </div>
// );


// METHOD 2
// we use a regular JS function, first argument is Any name you give it,(WrappedComponent) but it must start with a 
// Captial letter, because this will actually be a reference to a component,
// Second argument is something you need in a higher Order component. That depends on which type of HOC you are
// Creating..

// This HOC has the purpose of adding a div with a certain CSS class around any element
// Therefore getting classname that should be added makes more sense.

// You can have as many argumnet as you want, depending on what you are doing with your HOC.
const withClass = (WrappedComponent,className)=>{
  // return the function definition of a component function here.
  return props=>(
    <div className={className}>
      <WrappedComponent {...props}/>  
      {/* {...props} recieves all the props that are recieved by the component that it is Covering.. */}
    </div>
  );
}

// export default WithClass;
export default withClass;