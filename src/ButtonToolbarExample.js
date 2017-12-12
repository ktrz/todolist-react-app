import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

export const ButtonToolbarExample = () => (
  <div>
    <p>
      <ButtonToolbar>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonToolbar>
    </p>
    <p>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="danger">Danger</Button>
      </ButtonToolbar>
    </p>
  </div>
)
