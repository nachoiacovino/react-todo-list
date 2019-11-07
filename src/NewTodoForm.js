import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

export default class NewTodoForm extends Component {
    state = { text: "" }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newTodo = {...this.state, isCompleted: false, id: uuid()}
        this.props.addBox(newTodo)
        this.setState({ text: "" })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <input type="text" name="text" placeholder="New Todo" value={this.state.text} onChange={this.handleChange}/>
                <button>Add Todo</button>
            </form>
        )
    }
}
