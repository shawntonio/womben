module.exports = {
	getAllOfferings(req, res) {
		const db = req.app.get('db')

		db.getAllOfferings()
		.then( offerings => res.status(200).send(offerings))
		.catch(console.log)
	},

	addOffering(req, res) {
		const db = req.app.get('db')
		const {price, title, description, img} = req.body

		db.addOffering({price, title, description, img})
		.then(() => res.sendStatus(200))
		.catch(console.log)
	},

	editOffering(req, res) {
		const db = req.app.get('db')
		const {id, price, title, description, img} = req.body

		db.editOffering({id, price, title, description, img})
		.then(() => res.sendStatus(200))
		.catch(console.log)
	}
}