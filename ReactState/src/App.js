import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {name : "John", surname: "Doe",location:"React state"};
  }

  changeName= () => {
    this.setState({name: "Don", surname: "Jazzy", location:"Nigeria"});
  }
 
  render(){
    // return <h1>This is {this.state.name} {this.state.surname} from the {this.state.location}</h1>;
    return (
      <div>
        <h1>This is {this.state.name} {this.state.surname} from {this.state.location                     }</h1>
        <button onClick={this.changeName}>Change details</button>
      </div>
    );
  }
}

export default App;
