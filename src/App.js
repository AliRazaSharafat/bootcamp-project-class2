import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state={
    name:'Ali'
  };

  userNameChangedHandler=(event)=>{
    this.setState({name:event.target.value});
  }

  render(){
  return (
    <div className="App">
      <UserInput changed={this.userNameChangedHandler} currentName={this.state.name}/>
      <UserOutput userName={this.state.name}/>
      <UserOutput userName={this.state.name}/>
      <UserOutput userName={this.state.name}/>
    </div>
  );
}
}
export default App;
