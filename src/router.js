import { Router } from 'express';

const routes = new Router();

routes.post('/teste', (req, res) => {
  res.json({ mensagem: 'Hello World' });
});

export default routes;
