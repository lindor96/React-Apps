import React from 'react';
import './App.css';

class Car extends React.Component {
  render(){
    // return <h1>{this.props.name}</h1>;
    return <h1>I am {this.props.person.name} {this.props.person.surname}.</h1>;
  }
}

class Garage extends React.Component{
  render(){
    // const namevar = "React prop passed from one component to another";
    // return <Car name="{namevar}"/>;
    const personobject = {name: "John", surname: "Doe"};
    return <Car person = {personobject} />;
  }
}

export default Garage;
