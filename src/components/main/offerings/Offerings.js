import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Offering from './Offering';

function Offerings() {
	const [offerings, setOfferings] = useState([]) 

	useEffect(() => {
		Axios.get('/api/offerings')
		.then(res => {
			setOfferings(res.data)
		})
		.catch(console.log)
	}, [])

	return (
		<div className="offerings">
			<h1>Offerings</h1>
			{offerings.map(offering => (
				<Offering key={offering.id} {...offering} />
			))}
		</div>
	)
}

export default Offerings