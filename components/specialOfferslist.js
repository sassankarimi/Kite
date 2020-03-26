import React, { Component } from "react";
import { Container ,Button} from 'reactstrap';

import { Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
const SpecialOfferslist = () => (
  <div className="special-offers-list">
    <Container>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    </Container>
    
  </div>
)


export default SpecialOfferslist;