import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routesAdmin';


function Admin() {
	return (
		<div className="admin">
			<div className="edit-menu">
				<Link className="link" to='/admin/offerings'><h2>Offerings</h2></Link>
				<Link className="link" to='/admin/new-offering'><div>Add Offering</div></Link>
      </div>
			<div className="edit-page">
				{routes}
			</div>
		</div>
	);
}

export default Admin;