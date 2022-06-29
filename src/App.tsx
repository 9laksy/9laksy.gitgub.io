import React from 'react';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import { Card, CardContent } from './components/Card';
import Calculator from './components/Forms';


function App() {
  return (
    <div>
      <Header title={"Interest Calculator"} />
      <PageWrapper>
        <Card>
          <CardContent>
            <Calculator />
          </CardContent>
        </Card>
      </PageWrapper>
    </div>
  );
}


export default App;
