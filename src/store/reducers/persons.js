import * as actionTypes from "../actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_PERSON) {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: action.personInfo.name,
      age: action.personInfo.age
    };

    return {
      ...state, // making sure to update the person in an immutable way by first using the spread operator to make a shallow copy of the state
      persons: state.persons.concat(newPerson) // then we use concat to make a new array that is then in turn concattenated to the persons
    };
  } else if (action.type === actionTypes.DELETE_PERSON) {
      // We use filter to return a new array of persons who's id doesn't match the one that was clicked
    const allPersons = state.persons.filter( 
      person => person.id !== action.personId
    );
    return {
      ...state,
      persons: allPersons
    };
  }

  return state;
};

export default reducer;
