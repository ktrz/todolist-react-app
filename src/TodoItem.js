import React from 'react'

export const TodoItem = (props) => (
  <span className="list-group-item">
    <h4>{props.itemName}</h4>
    <p>{props.itemDescription}</p>
  </span>
)
