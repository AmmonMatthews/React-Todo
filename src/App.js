import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todo = [
  {
    task: 'Study',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Read',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Homework',
    id: 1528817084357,
    completed: false
  },
  {
    task: 'Family Time',
    id: 1528817084356,
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
    const newTodoList =this.state.todoList.map(item => {

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

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newItem]
    })

  }

  clear = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => (item.completed != true))
    })
  }


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
        todo={this.state.todoList}
        toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} 
        clearItem={this.clear} />
      </div>
    );
  }
}

export default App;
