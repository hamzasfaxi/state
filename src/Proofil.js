import React, { Component } from "react";


 class profile extends Component {
  state = {
    name: "Hamza Sfaxi",
    bio: "JS full stack Student",
    age: "28",
    date : new Date()
    
  };
  componentDidMount() {
    this.timerid = setInterval(() => {
        this.setState({date:new Date()})
        
    },1000);
  }
  componentWillUnmount() {
clearInterval(this.timerid)
  }
//   handleTime=(t)=>{
//       this.setState=(this.T=t);

//   }

  render() {
    return (
      <>
      
        <p> {this.state.name}</p>
        <p> {this.state.bio}</p>
        <p> {this.state.age}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </>
    );
  }
}

export default profile;