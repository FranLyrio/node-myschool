import { Router } from 'express';

import ModulesController from '../controllers/ModulesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const moduleRoutes = Router();
moduleRoutes.use(ensureAuthenticated);

const modulesController = new ModulesController();

moduleRoutes.get('/', modulesController.index);

moduleRoutes.post('/', modulesController.create);

export default moduleRoutes;