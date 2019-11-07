import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

export default class TodoList extends Component {
    state = {
        todos: [
            { text: "hello", isCompleted: true, id: 1},
            { text: "okay", isCompleted: false, id: 2}
        ]
    }

    addTodo = todo => {
        this.setState(st => ({
            todos: [...st.todos, todo]
        }))
    }

    removeTodo = id => {
        this.setState(st => ({
            todos: st.todos.filter(todo => todo.id !== id)
        }))
    }

    updateTodo = (id, updatedTodo) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, text: updatedTodo}
            }
            return todo
        })

        this.setState({ todos: updatedTodos })
    }

    toggleTodo = id => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo
        })

        this.setState({ todos: updatedTodos })
    }

    render() {
        return (
            <div className="TodoList">
                <h1>
                    Todo List
                    <span>A Simple React Todo List App</span>
                </h1>
                <NewTodoForm addBox={this.addTodo}/>
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            id={todo.id} 
                            text={todo.text} 
                            isCompleted={todo.isCompleted} 
                            removeTodo={this.removeTodo} 
                            updateTodo={this.updateTodo} 
                            toggleTodo={this.toggleTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
