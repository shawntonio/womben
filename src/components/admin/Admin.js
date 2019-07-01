import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';


function Admin() {
	return (
		<HashRouter>
			<div>
				<Link to='/admin/offerings'>Offerings</Link>
      </div>
			{routes}
		</HashRouter>
	);
}

export default Admin;