import React, { Component, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person'

//Class level
/* class App extends Component {

  state = {
    persons: [
      {
        name: 'Priyank',
        age: 26
      },
      {
        name: 'Jay',
        age: 14
      },
      {
        name: 'Hiren',
        age: 21
      },
      {
        name: 'Sangeeta',
        age: 22
      }
    ]
  };

  doModification = () => {
    this.setState({
      persons: [
        {
          name: 'Priyank',
          age: 21
        },
        {
          name: 'Jay',
          age: 14
        },
        {
          name: 'Hiren',
          age: 21
        },
        {
          name: 'Sangeeta',
          age: 22
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Good Morning</h1>
        <button onClick={this.doModification}>Click me!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
      //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'))
    );
  }
} */

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'} ;
  color: black;
}
`;
const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid #eeeeee;
box-shadow: 0 2px 3px #cccccc;
padding: 16px;
text-align: center;

`;
//Function level
function App() {
  //setPerson is function
  const [showContent, setShowContent] = useState({
    showContent: false
  });
  const [person, setPerson] = useState({
    persons: [
      {
        name: 'Priyank',
        age: 21
      },
      {
        name: 'Jay',
        age: 14
      },
      {
        name: 'Hiren',
        age: 21
      },
      {
        name: 'Sangeeta',
        age: 22
      }
    ]
  });
  const switchNameHandler = (idx, event) => {
    const personDetails = person.persons[idx];
    personDetails.name = event.target.value;
    const updatedPersons = person.persons;
    updatedPersons[idx] = personDetails;
    setPerson({ persons: updatedPersons })
  }

  const deleteElement = (index) => {
    let personsTemp = [...person.persons];
    personsTemp.splice(index, 1);
    setPerson({ persons: personsTemp });
  }
  const toggleShowElement = () => {
    setShowContent({
      showContent: !showContent.showContent
    });
    console.log(showContent.showContent)
  }
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
  let personComp = null;
  if (showContent.showContent) {
    personComp = (<div>
      {
        person.persons.map((item, idx) => {
          return (
            <Person clickEvent={deleteElement.bind(this, idx)}
              changeEvent={switchNameHandler.bind(this, idx)}
              name={item.name}
              age={item.age}
              key={idx} />);
        })
      }
    </div>);
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
  }
  const classes = [];
  if (person.persons.length <= 2) {
    classes.push('red');
  }

  if (person.persons.length <= 1) {
    classes.push('bold');
  }


  return (
    <StyledDiv>
      <h1>Hello Good Morning</h1>
      <p className={classes.join(' ')}>I am Priyank Agrawal</p>
      <StyledButton alt={showContent.showContent} onClick={() => toggleShowElement()}>Click me!</StyledButton>
      {personComp}
    </StyledDiv>

    //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'))
  );
}

export default App;
