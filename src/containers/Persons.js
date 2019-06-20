import React, { Component } from 'react';

import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddingPerson} />
                {this.props.persons.map(person => ( // we do not use this.state.persons anymore because the person is now managed via redux
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={(id) => this.props.onDeletingPerson(person.id)} // Using an annonymous function to gain access to the id as we click a specific person card
                       
                       />
                ))}
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // We create dispatchers that send information to the reducer on what kind of action we need to perform
        // We retrieve the action from the actionTypes that we import from action.js 
        // The action.js file simply holds hardcoded values of our action type so we have less risk of typos that would be hard to debugg in larger apps

        onAddingPerson: () => dispatch({type: actionTypes.ADD_PERSON}), 
        onDeletingPerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id}) // We immediately pass a payload to the dispatcher with the id of the specific card/person
                                                                                            // so that react can know which person was clicked and delete that person
    }
  
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);