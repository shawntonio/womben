import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<header>
				<h1>Womben & Co</h1>
				<nav>
					<ul>
						<Link>
							<li>Home</li>
						</Link>
						<Link>
							<li>About</li>
						</Link>
						<Link>
							<li>Offerings</li>
						</Link>
						<Link>
							<li>Shop</li>
						</Link>
						<Link>
							<li>Events</li>
						</Link>
						<Link>
							<li>Schedule Now</li>
						</Link>
					</ul>
				</nav>
			</header>
		)
	}
}