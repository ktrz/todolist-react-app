import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import './TodoList.css'

export class TodoList extends React.Component {

  constructor() {
    super()
    this.state = {
      newItemValue: '',
    }
  }

  render() {
    return (
      <div className="todo-list">
        <TodoInput value={this.state.newItemValue} onChange={(e) => this.handleNewItemValue(e.target.value)}/>
        <ListGroup>
          <TodoItem itemName={'install NodeJS'} itemDescription={'Task description'}></TodoItem>
          <TodoItem itemName={'install create-react-app'} itemDescription={'Task description'}></TodoItem>
          <TodoItem itemName={'create new app'} itemDescription={'Task description'}></TodoItem>
          <TodoItem itemName={'npm install'} itemDescription={'Task description'}></TodoItem>
          <TodoItem itemName={'npm start'} itemDescription={'Task description'}></TodoItem>
          <TodoItem itemName={'enjoy the running app'} itemDescription={'Task description'}></TodoItem>
        </ListGroup>
      </div>
    )
  }

  handleNewItemValue(v) {
    this.setState({
      newItemValue: v,
    })
  }
}
