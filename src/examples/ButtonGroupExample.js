import './ButtonGroupExample.css'

import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export const ButtonGroupExample = () => (
  <div className="button-group-example">
    <div>
      <ButtonGroup>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    </div>
    <div>
      <ButtonGroup>
        <Button>Default</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
      </ButtonGroup>
    </div>
  </div>
)
