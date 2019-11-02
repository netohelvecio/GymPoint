// import de bibliotecas
import { Router } from 'express';

// import de controllers
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

// import de middleware
import authMiddleware from './app/middlewares/auth';

// criação de rotas
const routes = new Router();

routes.post('/sessions', SessionController.store);

// rotas depois daque é obragatorio middlewares
routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

export default routes;
