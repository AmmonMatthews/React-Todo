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

    handleClear = e =>{
        e.preventDefault();
        this.props.clearItem()
    }

    render(){
        return(
            <form className="form">
                
                <input 
                type="text"
                name="todo"
                onChange={this.handleChanges}
                value={this.state.todoText}
                />
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
