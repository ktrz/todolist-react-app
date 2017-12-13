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
      savedNewItem: null
    }
  }

  render() {
    return (
      <div className="todo-list">
        <TodoInput
          value={this.state.newItemValue}
          onChange={(e) => this.handleNewItemValue(e.target.value)}
          onSave={this.saveNewItem.bind(this)}/>
        <ListGroup>
          {
            this.state.savedNewItem
              ? <TodoItem
                  itemName={this.state.savedNewItem.name}
                  itemDescription={this.state.savedNewItem.description}
                  onSaveName={this.saveNewItemName.bind(this)}/>
              : null
          }
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

  saveNewItem() {
    this.saveNewItemName(this.state.newItemValue)
    this.handleNewItemValue('')
  }

  saveNewItemName(v) {
    this.setState({
      savedNewItem: {
        name: v,
        description: `Description of ${v}`
      }
    })
  }
}
