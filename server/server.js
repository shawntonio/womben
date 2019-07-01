require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()

const EventCtrl = require('./controllers/Event')
const OfferingCtrl = require('./controllers/Offerings')
const AwsCtrl = require('./controllers/Aws')

const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
	app.set('db', db)
	app.listen(SERVER_PORT, console.log('listening on port', SERVER_PORT))
})

app.get('/api/event', EventCtrl.getAllEvents)

app.get('/api/offerings', OfferingCtrl.getAllOfferings)
app.post('/api/offerings', OfferingCtrl.addOffering)
app.put('/api/offerings', OfferingCtrl.editOffering)

app.get('/aws/get-sig', AwsCtrl.getSig) 