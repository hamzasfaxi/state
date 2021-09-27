import React, { Component } from 'react'
import Profile from './Proofil';


class App extends Component {
  state ={
    show : false
  }
  render() {
    return (
      <div>
        <button onClick ={()=>this.setState({show : !this.state.show})} >show</button>
        {
          this.state.show && <Profile/>
        }
        
      </div>
    )
  }
}
 

export default App;
