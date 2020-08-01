import React, { useEffect, useRef } from 'react';
import Auxiliry from '../../hoc/Auxiliry';

import classes from './Cockpit.css';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect...');
        const timer = setTimeout(() => {
            console.log('[Cockpit.js] persons values are changed...');
        }, 1000);
        toggleBtnRef.current.click();
        return () => {
            clearTimeout(timer); // Clear timer when component is unmounted,
            console.log('[Cockpit.js] cleaning...')
        };
    }, [props.personsLength]);
    //If no dependency pass it as []

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    console.log(props.showPersons);
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <Auxiliry>
            <button onClick = {props.login}>Login</button>
            <button onClick = {props.logout}>Logout</button>
            <h1>{props.appTitle}</h1>,
            <p className={assignedClasses.join(" ")}>GOD</p>,
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Click me!</button>
        </Auxiliry>
    );
};
export default React.memo(Cockpit);