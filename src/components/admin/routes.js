import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Offerings from './editOfferings/EditOfferings';

export default (
	<Switch>
		<Route path='/admin/offerings' component={Offerings} />
	</Switch>
)