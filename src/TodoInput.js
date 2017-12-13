import React from 'react'
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap'

export const TodoInput = (props) => (
  <form>
    <FormGroup>
      <InputGroup>
        <FormControl
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Enter task name"></FormControl>
        <InputGroup.Button>
          <Button bsStyle="primary"
                  onClick={() => props.onSave(props.value)}>
            Save
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  </form>
)
