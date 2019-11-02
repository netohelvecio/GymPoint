// import de bibliotecas
import { Router } from 'express';

// import de controllers
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import MatriculationController from './app/controllers/MatriculationController';

// import de middleware
import authMiddleware from './app/middlewares/auth';

// criação de rotas
const routes = new Router();

routes.post('/sessions', SessionController.store);

// rotas depois daque é obragatorio middlewares
routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.post('/matriculations', MatriculationController.store);
routes.get('/matriculations', MatriculationController.index);
routes.put('/matriculations/:id', MatriculationController.update);
routes.delete('/matriculations/:id', MatriculationController.delete);

export default routes;
