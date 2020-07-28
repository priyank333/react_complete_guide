import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /*     static getDerievedStateFromProps(props, state) {
            console.log("[Persons.js] getDerievedStateFromProps");
        } */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("[Persons.js] componentDidUpdate")
    }
    render() {
        return this.props.persons.map((person, index) => {
            console.log("Perons => " + person);
            return <Person click={() => this.props.clicked(index)}
                firstName={person.firstName}
                lastName={person.lastName}
                hasPassport={person.hasPassport}
                change={(event) => this.props.changed(event, index)} />
        });
    }
}


export default Persons;