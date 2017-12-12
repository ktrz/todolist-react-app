import React from 'react'
import { Button, Jumbotron, Tab, Tabs } from 'react-bootstrap'
import { TabbedExamples } from './examples/TabbedExamples'

export const App = () => (
  <Jumbotron>
    <h1>Hello, group!</h1>
    <p>We're going to create a simple todo list web application. We will use react-bootstrap components to make our app pretty</p>
    <p>
      <Button bsStyle="primary" onClick={() => alert('Let\'s start with ...')}>
        Let's get started
      </Button>
    </p>
    <Tabs defaultActiveKey={1} id="main-tabs">
      <Tab eventKey={1} title="Todo list app">
        It's time to create our todo list app
      </Tab>
      <Tab eventKey={2} title="Examples">
        <TabbedExamples/>
      </Tab>
    </Tabs>
  </Jumbotron>
)
