import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { ButtonExamples } from './ButtonExamples'
import { ButtonGroupExample } from './ButtonGroupExample'
import { ButtonToolbarExample } from './ButtonToolbarExample'

export const App = () => (
  <Jumbotron>
    <h1>Hello, group!</h1>
    <p>We're going to create a simple todo list web application. We will use react-bootstrap components to make our app pretty</p>
    <p>
      <Button bsStyle="primary" onClick={() => alert('Let\'s start with ...')}>
        Let's get started
      </Button>
    </p>
    <ButtonExamples/>
    <ButtonGroupExample/>
    <ButtonToolbarExample/>
    <p>Now we have nicely split up components :)</p>
  </Jumbotron>
)
