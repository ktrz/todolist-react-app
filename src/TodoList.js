import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './TodoList.css'
import { TodoItem } from './TodoItem'

export const TodoList = () => (
  <div className="todo-list">
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
