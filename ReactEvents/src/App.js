import React from 'react';
import './App.css';

class App extends React.Component {
  dogBark = (bark) =>{
    alert(bark);
  }
  // dogBark = () =>{
  //   alert('WOOF!!');
  // }
  render(){
    return (
      <div>
        <h1>The button below alerts a dog's bark with a basic JavaScript <code>alert()</code> function.</h1>
        <button onClick = {() => this.dogBark('WOOF!!')}>Bark</button>
        {/* <button onClick = {this.dogBark.bind(this,'WOOF!!')}>Bark</button> */}
        {/* <button onClick = {this.dogBark}>Bark</button> */}
      </div>
    );
    // return (
    //   <div>
    //     <h2>There are two options for passing parameters to event handlers</h2>
    //     <ol>
    //       <li>Make an anonymous arrow function</li>
    //       <br/>
    //       <li>Bind the event handler to this</li>
    //     </ol>
    //   </div>
    // );
  }
}

export default App;
