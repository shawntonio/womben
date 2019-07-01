import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routesAdmin';


function Admin() {
	return (
		<div>
			<div>
				<Link to='/admin/offerings'>Offerings</Link>
      </div>
			{routes}
		</div>
	);
}

export default Admin;