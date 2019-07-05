import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Offerings from './editOfferings/EditOfferings';
import OfferingForm from './editOfferings/NewOfferingForm';

export default (
	<Switch>
		<Route path='/admin/offerings' component={Offerings} />
		<Route path='/admin/new-offering' component={OfferingForm} />
	</Switch>
)