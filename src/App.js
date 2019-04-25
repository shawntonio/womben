import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

import './App.css';

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
