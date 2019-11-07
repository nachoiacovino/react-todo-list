import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    state = {
        isEditing: false,
        text: this.props.text
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleRemove = e => {
        this.props.removeTodo(this.props.id)
    }

    toggleForm = e => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleEdit = e => {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.text)
        this.toggleForm()
    }

    handleToggle = e => {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleEdit}>
                        <input type="text" name="text" id="" value={this.state.text} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li onClick={this.handleToggle} className={`Todo-task ${this.props.isCompleted && "completed"}`}>{this.state.text}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}><i className="fa fa-pen" aria-hidden="true"></i></button>
                        <button onClick={this.handleRemove}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            )
        }
        return result
    }
}