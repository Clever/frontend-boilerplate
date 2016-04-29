// View of the React application as a whole.
import React from 'react';

import CounterSection from '../containers/CounterSection';
import IpSection from '../containers/IpSection';

export default () => (<div className="overview">
  <h1>Example Application</h1>
  <CounterSection />
  <IpSection />
</div>);
