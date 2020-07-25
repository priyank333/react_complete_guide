import React from 'react'
import './Person.css'
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className='Person'>
            <p onClick={props.clickEvent}>
                I'm {props.name} and I'm {props.age} years old.
    </p>
            <input onChange={props.changeEvent} type='text' />
        </div>
    );
}

export default person;