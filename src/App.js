import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

export const App = () => (
  <Jumbotron>
    <h1>Hello, group!</h1>
    <p>We're going to create a simple todo list web application. We will use react-bootstrap components to make our app pretty</p>
    <p>
      <Button bsStyle="primary" onClick={() => alert('Let\'s start with ...')}>
        Let's get started
      </Button>
    </p>
    <p>Let's put our examples in separate tabs so that we can view them on one screen without scrolling. We can use tabs component for
      that</p>

  </Jumbotron>
)
