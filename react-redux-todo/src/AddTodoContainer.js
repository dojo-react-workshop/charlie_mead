import React from 'react'
import { connect } from 'react-redux'

let id = 1;

const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text,
        id: id++
    }
}

class AddTodo extends React.Component {
    state = {
        newTodoText: ''
    }

    handleChange = (event) => {
        this.setState({
            newTodoText: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(addTodo(this.state.newTodoText));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newTodoText} onChange={this.handleChange} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )

    }
}
AddTodo = connect()(AddTodo)

export default AddTodo