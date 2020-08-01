import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass';
import withClass from '../hoc/witchClass';
import Auxiliry from '../hoc/Auxiliry';
import AuthContext from '../context/auth-context';

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
    showPersons: true,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  nameChangeHandler = (event, id) => {
    const firstName = event.target.value;

    //This state works when function goes in asynchronouse
    this.setState((prevState, props) => {
      const person = { ...prevState.persons[id] };
      person.firstName = firstName;
      const persons = [...prevState.persons];
      persons[id] = person;
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
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
  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  logoutHandler = () => {
    this.setState({ authenticated: false });
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
    return (<Auxiliry>
      <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
      <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
        {this.state.showCockpit ?
          (<Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
            logout={this.logoutHandler}
          />) : null}
        {persons}
      </AuthContext.Provider>
    </Auxiliry>);
  }
}

export default withClass(App, classes.App);
