const { Router } = require('express');

const ProjectController = require('../src/controllers/ProjectController');
const checkIdExists = require('./middlewares/checkIdExists');
const checkIdNew = require('./middlewares/checkIdNew');

const routes = new Router();

routes.get('/projects',  ProjectController.index);
routes.post('/projects', checkIdNew, ProjectController.store);
routes.put('/projects/:id', checkIdExists, ProjectController.update);
routes.delete('/projects/:id', checkIdExists, ProjectController.delete);
routes.post('/projects/:id/tasks', checkIdExists, ProjectController.storeTask);


module.exports = routes;