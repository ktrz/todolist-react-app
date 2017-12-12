import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export const ButtonGroupExample = () => (
  <div>
    <p>
      <ButtonGroup>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    </p>
    <p>
      <ButtonGroup>
        <Button>Default</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
      </ButtonGroup>
    </p>
  </div>
)
