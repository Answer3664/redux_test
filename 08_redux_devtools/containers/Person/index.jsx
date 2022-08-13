import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { createPersonAction } from '../../redux/actions/person'
import { connect } from 'react-redux'
class Person extends Component {

    addPerson = ()=>{
        //
        const name = this.name.value
        const age = this.age.value
        const personObj = {id: nanoid(), name, age}
        this.props.add(personObj)
        this.age.value = ''
        this.name.value = ''
    }
    
    render() {
        return (
        <div>
            <h2>This is Person component: </h2>
            <h3>Count above is {this.props.count}</h3>
            <input ref={c => this.name = c} type="text" placeholder='Input your name'/>
            <input ref={c => this.age = c} type="text" placeholder='Input your age'/>
            <button onClick={this.addPerson}>Add</button>
            <ul>
                {
                    this.props.person.map((per)=>{
                        return <li key={per.id}>{per.name}---{per.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default connect(
    state => ({person: state.allPersons, count: state.counter}),
    {
        add: createPersonAction
    }

)(Person)
