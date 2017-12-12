import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { ButtonExample } from './ButtonExample'
import { ButtonGroupExample } from './ButtonGroupExample'
import { ButtonToolbarExample } from './ButtonToolbarExample'

export const TabbedExamples = () => (
  <Tabs defaultActiveKey={1} id="examples-tabs">
    <Tab eventKey={1} title="Buttons Example">
      <ButtonExample></ButtonExample>
    </Tab>
    <Tab eventKey={2} title="Button Groups Example">
      <ButtonGroupExample/>
    </Tab>
    <Tab eventKey={3} title="Button Toolbars Example">
      <ButtonToolbarExample/>
    </Tab>
  </Tabs>
)
