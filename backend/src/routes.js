const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Ongs Routes
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);
routes.delete('/delete', OngController.delete);

// Incidents Routes
routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Misc
routes.get('/profile', ProfileController.list); // List especific ong incidents
routes.post('/sessions', SessionController.create); // Handle login

module.exports = routes;