import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Jumbotron } from 'react-bootstrap'
import ReactDOM from 'react-dom';

const ButtonExamples = () => (
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

const ButtonGroupExample = () => (
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

const ButtonToolbarExample = () => (
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

const App = () => (
  <Jumbotron>
    <h1>Hello, group!</h1>
    <p>We're going to create a simple todo list web application. We will use react-bootstrap components to make our app pretty</p>
    <p>
      <Button bsStyle="primary" onClick={() => alert('Let\'s start with ...')}>
        Let's get started
      </Button>
    </p>
    <p>Ok our index.js file is growing really fast. It's time to split it up!</p>
  </Jumbotron>
)


ReactDOM.render(<App/>, document.getElementById('root'));
