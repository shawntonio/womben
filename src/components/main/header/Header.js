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
					<Link className="link" to='/main/about'>
						<li>About</li>
					</Link>
					<Link className="link" to='/main/offerings'>
						<li>Offerings</li>
					</Link>
					<Link className="link" to='/main/shop'>
						<li>Shop</li>
					</Link>
					<Link className="link" to='/main/events'>
						<li>Events</li>
					</Link>
					
						<li>Schedule Now</li>
				</ul>
			</nav>
			<hr/>
		</header>
	)
}

export default Header