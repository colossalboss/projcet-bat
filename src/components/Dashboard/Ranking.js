import React from 'react';
import {Tabs, Tab, Panel} from 'react-bootstrap';

export default () => {
  return (
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Tab 1">
            <TabTable />
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            <TabTable />
          </Tab>
          <Tab eventKey={3} title="Tab 3">
            <TabTable />
          </Tab>
        </Tabs>
      </Panel.Body>
    </Panel>
  )
}

const TabTable = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Baddest</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
  );
}