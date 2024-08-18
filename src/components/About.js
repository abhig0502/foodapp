import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Welcome to about us page</h1>
      <h1>This is the about us page</h1>
      {/* <User name={"Abhinav kumar gupta (function)"} Location={"Najibabad"} /> */}
      <UserClass name={"Abhinav kumar gupta (class)"} Location={"Najibabad"} />{" "}
      {/* here we have created two instances to same class */}
    </div>
  );
};

export default About;

// class About extends React.Component{
//   constructor(){
//     console.log("parent constructor ");
//   }
//   render(){
//     console.log("parent rendered");
//     return(
//         <div>
//           <UserClass name={"ABHINAV"} Location={"NAJIBABAD"}/>
//         </div>

//     );
//   }
// }
// export default About;

//now what will happen is
// lifecycle of class based Component

// /*
// -in About
//   -parent constructor
//   -parent rendered
//   <userClass />  class instance will be called
//   -child constructor
//   -child rendered
// */

/*
just like useEffect hook we have Componentdidmount ---------- */

// class About extends React.Component{
//   constructor(){
//     console.log("parent constructor ");
//   }

//   componentDidMount(){
//     console.log("Parent component Did Mount");
//   }
//   render(){
//     console.log("parent rendered");
//     return(
//       <UserClass name={"ABHINAV"} Location={"NAJIBABAD"}/>
//     );
//   }
// }
// export default About;

/*
here the lifecycle of class based component work like this
- in About
  -parent constructor
  -parent rendered
  <Userclass /> class instance called
    -child constructor
    -parent constructor
-parent component did mount    
*/

//now in the userclass if we also have componentDidMount then how will this work

// class About extends Component{
//   constructor(props){
//     super(props)
//     console.log("parent constructor ");
//   }

//   componentDidMount(){
//     console.log("Parent component Did Mount");
//   }
//   render(){
//     console.log("parent rendered");
//     return(
//       <div>
//       <UserClass name={"ABHINAV"} Location={"NAJIBABAD"}/>
//       </div>
//     );
//   }
// }
// export default About;

/*
-now the lifecycle of this class will work like this

-in About
  -parent constructor
  -child rendered
  <userClass /> will be called
    -child constructor
    -child rendered
-child component Did Mount
-parent compnent Did Mount

this has happened because
page renders in two states the first one is render phase and the second one is commit phase
in render phase 
constructor will be rendered (new props,setState(),forceUpdate())
           |
   the second state is commit state which deals with the dom manipulation part so it is a very costly operation 
   it takes a lot of time so in order to optimize it react uses recocilation algo 
   
   so the componentDidMount is works in the commit phaze 
   so react first completes the rendered phaze and then go to the commit phaze


*/

// class About extends Component{
//   constructor(props){
//     super(props)
//     console.log("parent constructor ");
//   }

//   componentDidMount(){
//     console.log("Parent component Did Mount");
//   }
//   render(){
//     console.log("parent rendered");
//     return(
//       <div>
//       <UserClass name={"ABHINAV"} Location={"NAJIBABAD"}/>
//       <UserClass name={"UDIT"} Location={"DEHRADUN"} />
//       </div>
//     );
//   }
// }
// export default About;

/*
-in About
  -parent constructor 
  -parent rendered
    <UserClass /> first instance with name ABHINAV will be called
      -child constructor
      -child rendered
    <UserClass /> second instance with name UDIT will b3 called
      -child constructor
      -child rendered
child component Did Mount 
child component Did Mount 
Parent component Did Mount
*/
