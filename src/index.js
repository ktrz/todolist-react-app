import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap'
import ReactDOM from 'react-dom';

const App = () => (
  <Jumbotron>
    <h1>Hello, group!</h1>
    <p>We're going to create a simple todo list web application. We will use react-bootstrap components to make our app pretty</p>
    <p>
      <Button bsStyle="primary" onClick={() => alert('Let\'s start with ...')}>
        Let's get started
      </Button>
    </p>
  </Jumbotron>
)

ReactDOM.render(<App/>, document.getElementById('root'));
