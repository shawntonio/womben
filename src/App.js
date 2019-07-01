import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Admin from './components/admin/Admin';

import './App.scss';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </HashRouter>
  );
}

export default App;
