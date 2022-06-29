import React from 'react';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import InterestCalculator from './components/Forms/InterestCalculator';
import { Card, CardContent } from './components/Card';


function App() {
  return (
    <div>
      <Header title={"Interest Calculator"} />
      <PageWrapper>
        <Card>
          <CardContent>
            <InterestCalculator />
          </CardContent>
        </Card>
      </PageWrapper>
    </div>
  );
}


export default App;
