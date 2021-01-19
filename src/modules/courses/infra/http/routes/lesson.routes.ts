import { Router } from 'express';

import LessonsController from '../controllers/LessonsController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const lessonRoutes = Router();
lessonRoutes.use(ensureAuthenticated);

const lessonsController = new LessonsController();

lessonRoutes.get('/', lessonsController.index);

lessonRoutes.post('/', lessonsController.create);

export default lessonRoutes;