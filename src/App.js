import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
        {name: 'Max', age: 25},
        {name: 'Gerardo', age: 23},
        {name: 'Random Dude', age: 26},
      ]
    }

    switchNameHandler = () => {
      // console.log('Was clicked!')
      // Don't do this: this.state.persons[0].name = 'Maximilian';
      this.setState({
        persons: [
        {name: 'Maximillian', age: 25},
        {name: 'Gerardo', age: 23},
        {name: 'Random Dude', age: 27}, ]

       });
    }

  render() {  
    return (
      <div className="App">
        <h1> Hi I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbie: Gaming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'));
  }
}

export default App;
