import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  state = {
    persons: [
      { firstName: 'Priyank', lastName: 'Agrawal', hasPassport: true },
      { firstName: 'Komal', lastName: 'Agrawal', hasPassport: true },
      { firstName: 'Aditya', lastName: 'Agrawal', hasPassport: true },
      { firstName: 'M.K', lastName: 'Singh', hasPassport: false }
    ],
    showPersons: true
  };

  nameChangeHandler = (event, id) => {
    const person = { ...this.state.persons[id] };
    person.firstName = event.target.value;
    const persons = [...this.state.persons];
    persons[id] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePersonHandler = (personIdx) => {
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({ persons: persons });
  }



  render() {
    let persons = null;
    console.log("showPerons :: " + this.state.showPersons);
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    }
    return (<div className={classes.App}>
      <Cockpit
        appTitle={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      ></Cockpit>
      {persons}
    </div>);
  }
}

export default App;
