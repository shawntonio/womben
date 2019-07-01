module.exports = {
	getAllEvents(req, res) {
		const db = req.app.get('db')

		db.getAllEvents().then(events => {
			res.status(200).send(events)
		}).catch(console.log)
	}
}