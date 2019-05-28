import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="main-header">
			<h1>Womben & Co</h1>
			<nav>
				<ul className="header-links">
					<Link className="link" to='/'>
						<li>Home</li>
					</Link>
					<Link className="link" to='/about'>
						<li>About</li>
					</Link>
					<Link className="link" to='/offerings'>
						<li>Offerings</li>
					</Link>
					<Link className="link" to='/shop'>
						<li>Shop</li>
					</Link>
					<Link className="link" to='/events'>
						<li>Events</li>
					</Link>
					<Link className="link">
						<li>Schedule Now</li>
					</Link>
				</ul>
			</nav>
			<hr/>
		</header>
	)
}

export default Header