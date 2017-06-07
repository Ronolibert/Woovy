import React from 'react';
import { Route } from 'react-router-dom';
import AsyncRoute from './AsyncRoute';

const App = () => (
  <div className="app">
    <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />
    <Route exact path="/header" component={props => <AsyncRoute props={props} loadingPromise={import('./Header')} />} />
  </div>
);

export default App;
