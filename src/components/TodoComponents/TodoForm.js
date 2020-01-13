import React from 'react';
import Todo from './Todo';


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render(){
        return(
            <form>
                Form
                <input type="text"/>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
