import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './TodoList.css'

export const TodoList = () => (
  <div className="todo-list">
    <ListGroup>
      <ListGroupItem header={'install NodeJS'} active>Task description</ListGroupItem>
      <ListGroupItem header={'install create-react-app'} bsStyle="danger">Task description (important task)</ListGroupItem>
      <ListGroupItem header={'create new app'}>Task description</ListGroupItem>
      <ListGroupItem header={'npm install'}>Task description</ListGroupItem>
      <ListGroupItem header={'npm start'}>Task description</ListGroupItem>
      <ListGroupItem header={'enjoy the running app'}>Task description</ListGroupItem>
    </ListGroup>
  </div>
)
