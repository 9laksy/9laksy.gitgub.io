import React from 'react';

import Header from './components/Header';
import Panel from './components/Panel/Panel';
import PanelContent from './components/Panel/PanelContent';
import PageWrapper from './components/PageWrapper';
import Form from './components/Forms/Form';
import PanelContainer from './components/Panel/PanelContainer';
import InterestCalculator from './components/Forms/InterestCalculator';


function App() {
  return (
    <div>
      <Header title={"Interest Calculator"} />
      <PageWrapper>
        <PanelContainer>
          <Panel>
            <PanelContent>
               <InterestCalculator />
            </PanelContent>
          </Panel>
        </PanelContainer>
      </PageWrapper>
    </div>
  );
}
export default App;
