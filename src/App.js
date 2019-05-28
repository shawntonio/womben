import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/header/Header';
import routes from './routes';

import './App.scss';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
      </div> 
      {routes}
    </HashRouter>
  );
}

export default App;
