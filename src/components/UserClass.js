import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        Location: "Default",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    // console.log("child component Did Mount ");
    //API CALL
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const {name,Location}=this.props;
    const { count, count2 } = this.state;
    // console.log("child rendered");
    const { name, location ,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count=this.state.count+1;

            this.setState({
              count: this.state.count + 1,
              // count2: this.state.count2+1, //we can do it like this ,can accomodate like this
              //if you want to update count 2 variable with only single button you donot need to
            }); //re-use this.setstate({count2:this.state.count2+1})
          }}
        >
          count increase
        </button>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          count increase
        </button>
        <img src={avatar_url} />
        <h1>Name:{name}</h1>
        <h3>Location:{location}</h3>

        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
