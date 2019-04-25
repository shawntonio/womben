import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/home/Home';
import Offerings from './components/offerings/Offerings';
import About from './components/about/About';
import Shop from './components/shop/Shop';
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