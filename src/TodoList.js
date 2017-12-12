import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import './TodoList.css'

export const TodoList = () => (
  <div className="todo-list">
    <TodoInput value={'Test value'} onChange={(e) => console.log(e.target.value)}/>
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
