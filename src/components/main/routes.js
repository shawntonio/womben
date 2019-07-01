import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home/Home';
import Offerings from './offerings/Offerings';
import About from './about/About';
import Shop from './shop/Shop';
import Events from './events/Events';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/offerings' component={Offerings} />
		<Route path='/shop' component={Shop} />
		<Route path='/events' component={Events} />
	</Switch>
)