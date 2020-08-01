import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    /*     static getDerievedStateFromProps(props, state) {
            console.log("[Persons.js] getDerievedStateFromProps");
        } */
/*     shouldComponentUpdate(nextProps, nextState) {

        //Optimize if persons attribute is changed then update.
        //While setting persons create new array don't manipulate
        if (nextProps.persons !== this.props.persons) {
            console.log("[Persons.js] shouldComponentUpdate");
            return true;
        } else {
            return false;
        }
    } */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("[Persons.js] componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount")
    }
    render() {
        return this.props.persons.map((person, index) => {
            console.log("Perons => " + person);
            return <Person click={() => this.props.clicked(index)}
                firstName={person.firstName}
                lastName={person.lastName}
                key = {index}
                hasPassport={person.hasPassport}
                change={(event) => this.props.changed(event, index)} />
        });
    }
}


export default Persons;