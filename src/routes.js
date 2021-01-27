import { Router } from 'express';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.post('/login', SessionController.store);

routes.get('/users', UserController.index);

routes.get('/users/:uid', UserController.show);

routes.post('/users', UserController.store);

routes.delete('/users/:uid', UserController.delete);

routes.put('/users/:uid', UserController.update);

export default routes;
