import React from 'react'
import { Button } from 'react-bootstrap';

export const ButtonExamples = () => (
  <div>
    <p>
      <Button onClick={() => alert('I am default button')} tabIndex="1">
        Default button
      </Button>
      <Button bsStyle="primary" onClick={() => alert('I am primary button')} tabIndex="2">
        Primary button
      </Button>
      <Button bsStyle="success" onClick={() => alert('Congratulation, you have created a success button')} tabIndex="3">
        Success button
      </Button>
      <Button bsStyle="danger" onClick={() => alert('You are a brave one :)')} tabIndex="4">
        Danger button
      </Button>
    </p>
    <p>
      <Button bsSize="large">
        Large button
      </Button>
      <Button bsStyle="primary" bsSize="large">
        Large button
      </Button>
    </p>
    <p>
      <Button>
        Default size button
      </Button>
      <Button bsStyle="primary">
        Default size button
      </Button>
    </p>
    <p>
      <Button bsSize="small">
        Small button
      </Button>
      <Button bsStyle="primary" bsSize="small">
        Small button
      </Button>
    </p>
    <p>
      <Button bsSize="xsmall">
        Small button
      </Button>
      <Button bsStyle="primary" bsSize="xsmall">
        Small button
      </Button>
    </p>
    <p>
      <Button bsStyle="primary" bsSize="large" block>
        Block level large primary button
      </Button>
    </p>
    <p>

      <Button bsStyle="primary" bsSize="large" disabled>
        Disabled primary button
      </Button>
      <Button bsSize="large" disabled>
        Disabled button
      </Button>
    </p>
    <p>
      All react-bootstrap button properties can be found
      <a href="https://react-bootstrap.github.io/components.html#buttons-props" target="_blank">here</a>
    </p>
  </div>
)
