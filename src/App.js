import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';
import { Search, Button } from 'carbon-components-react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  Content,
} from 'carbon-components-react/lib/components/UIShell';
import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import AssetsAccordion from './components/AssetsAccordion';

import { Margin } from './components/common';

function PageHeader() {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        Garage
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

const PageBody = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const LineWrap = styled.div`
  display: flex;
`;

function PageContent() {
  return (
    <Content>
      <PageBody>
        <h1>Assets</h1>

        <Margin top>
          <LineWrap>
            <Search placeHolderText="Search assets" />
            <Button>Search</Button>
          </LineWrap>
        </Margin>
        <Margin top>
          <AssetsAccordion />
        </Margin>
      </PageBody>
    </Content>
  );
}
class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <PageContent />
      </>
    );
  }
}

export default App;
