import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

   const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 25},
      {name: 'Gerardo', age: 23},
      {name: 'Random Dude', age: 26},
    ]
    
   });

   const [otherState, setOtherState] = useState('some other value');

   console.log(personsState, otherState);

   const switchNameHandler = () => {
    // console.log('Was clicked!')
    // Don't do this: personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
      {name: 'Maximillian', age: 25},
      {name: 'Gerardo', age: 23},
      {name: 'Random Dude', age: 27}, 
    ]
    
  
     });
  }
    
    return (
      <div className="App">
        <h1> Hi I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}> Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbie: Gaming</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'));
  
}

export default app;




