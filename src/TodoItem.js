import React from 'react'
import { TodoInput } from './TodoInput'

export class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      editedName: '',
    }
  }

  render() {
    return (
      <span className="list-group-item">
        {
          this.state.isEditing
            ? <TodoInput value={this.state.editedName}
                         onChange={this.changeEditedName.bind(this)}
                         onSave={this.saveName.bind(this)}/>
            : <span onClick={this.startEdit.bind(this)}>
                <h4>{this.props.itemName}</h4>
                <p>{this.props.itemDescription}</p>
              </span>
        }
      </span>
    )
  }

  startEdit() {
    this.setState({
      isEditing: true,
      editedName: this.props.itemName,
    })
  }

  stopEdit() {
    this.setState({
      isEditing: false,
    })
  }

  changeEditedName({ target: { value } }) {
    this.setState({
      editedName: value,
    })
  }

  saveName(v) {
    if (this.props.onSaveName)
      this.props.onSaveName(v)
    this.stopEdit()
  }
}
