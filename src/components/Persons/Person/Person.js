import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/witchClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
import Auxiliry from '../../../hoc/Auxiliry';
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }
    componentDidUpdate() {
        console.log("[Person.js] ComponentDidUpdate");
    }


    static contextType = AuthContext;

    render() {
        console.log("[Person.js] rendering...");
        return (
            <Auxiliry>
                {this.context.authenticated ? <p>Authenticated!!</p> : <p>Please login</p>}
                <p onClick={this.props.click} >I'm {this.props.firstName} {this.props.lastName}</p>
                <p>hasPassport: {this.props.hasPassport ? 'Yes' : 'No'}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.firstName}
                    //ref={(inputRef) => { this.inputElement = inputRef }}
                    ref={this.inputElement}
                />
            </Auxiliry>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    hasPassport: PropTypes.bool,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);