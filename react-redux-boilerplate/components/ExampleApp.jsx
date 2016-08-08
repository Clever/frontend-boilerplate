// View of the React application as a whole.
import React from 'react';

import CounterSection from '../components/CounterSection';
import QuoteSection from '../components/QuoteSection';

export default function ExampleApp() {
  return (<div className="overview">
    <h1>Example Application</h1>
    <CounterSection />
    <QuoteSection />
  </div>);
}
