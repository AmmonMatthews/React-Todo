import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todoList: todo,
    };
  }

  toggleItem = id => {
     // find the item we clicked on
    // toggle the purchased field
    // update state with the new grocery data
    const newTodoList =this.state.todo.map(item => {

      if(item.id === id) {
        return {
          ...item, 
          completed: !item.completed
        }}
        else {
          return item;
        }
      }
    );
      this.setState({todoList : newTodoList })
};

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList 
        todo={this.state.todoList}
        toggleItem={toggleItem}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
