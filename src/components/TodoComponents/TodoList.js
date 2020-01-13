// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {


    return(
        <div>
            TodoList
            {props.todo.map(item => (
                <Todo 
                key={item.id} 
                todo={item} 
                toggleItem={props.toggleItem}
                />
                ))
            }
            
        </div>
    )
}

export default TodoList;