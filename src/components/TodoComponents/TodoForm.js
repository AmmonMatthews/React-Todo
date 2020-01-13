import React from 'react';
import Todo from './Todo';


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ""
        }
    }

    handleChanges= (e) =>{
        this.setState({
            todoText: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);
        this.setState({todoText: ""})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Form
                <input 
                type="text"
                name="todo"
                onChange={this.handleChanges}
                value={this.state.todoText}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
