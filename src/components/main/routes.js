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
		<Route path='/main/about' component={About} />
		<Route path='/main/offerings' component={Offerings} />
		<Route path='/main/shop' component={Shop} />
		<Route path='/main/events' component={Events} />
	</Switch>
)