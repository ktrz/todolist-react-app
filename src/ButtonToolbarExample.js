import './ButtonToolbarExample.css'

import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

export const ButtonToolbarExample = () => (
  <div className="button-toolbar-example">
    <div>
      <ButtonToolbar>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonToolbar>
    </div>
    <div>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="danger">Danger</Button>
      </ButtonToolbar>
    </div>
  </div>
)
