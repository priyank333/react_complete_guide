import React, { Component } from 'react';
import classes from './Person.css'
class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");
        return (
            <div className = {classes.Person}>
                <p onClick={this.props.click} >I'm {this.props.firstName} {this.props.lastName}</p>
                <p>hasPassport: {this.props.hasPassport ? 'Yes' : 'No'}</p>
                <input type="text" onChange={this.props.change} value={this.props.firstName} />
            </div>
        );
    }
}
export default Person;