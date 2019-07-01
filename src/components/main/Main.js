import React from 'react';
import Header from './header/Header';
import routes from './routes';


function Main(props) {
  return (
    <div>
      <div>
        <Header />
      </div> 
      {routes}
    </div>
  );
}

export default Main;