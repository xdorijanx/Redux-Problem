

import './AddPerson.css';

/*const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

*/


import React, { Component } from 'react'

 class AddPerson extends Component {

    state={
        name: '',
        age: ''
    }

    nameChangedHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    ageChangedHandler = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    render() {
        return (
            <div className='AddPerson'>
                   <input type='text' 
                   placeholder='Name' 
                   onChange={this.nameChangedHandler}
                   value={this.state.name}/>

                   <input type='number'
                    placeholder='Age' 
                    onChange={this.ageChangedHandler}
                    value={this.state.age}/>
                   <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>  {/* Combining local UI state with the dispatcher */}
            </div>
        )
    }
}



export default AddPerson;