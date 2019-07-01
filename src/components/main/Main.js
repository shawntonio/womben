import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './header/Header';
import routes from './routes';


function Main() {
  return (
    <HashRouter>
      <div>
        <Header />
      </div> 
      {routes}
    </HashRouter>
  );
}

export default Main;