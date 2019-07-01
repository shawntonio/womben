import React, {useState, useEffect} from 'react';
import Axios from 'axios';
 
function EventThumbnails(props) {

	const [events, setEvents] = useState([])

	useEffect(() => {
		Axios.get('/api/event').then(res => setEvents(res.data))
	}, [])

	return (
		<div>
			<h1>Ev</h1>
			<div className='event-thumbs'>
				{events.map(event => (
					<div key={event.id} className='event-thumb'>
						<img src={event.img} alt="event"/>
						<h2>{event.name}</h2>
						<p>{event.date}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default EventThumbnails