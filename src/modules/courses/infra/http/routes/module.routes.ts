import { Router } from 'express';

import ModulesController from '../controllers/ModulesController';

const moduleRoutes = Router();
const modulesController = new ModulesController();

moduleRoutes.get('/', modulesController.index);

moduleRoutes.post('/', modulesController.create);

export default moduleRoutes;