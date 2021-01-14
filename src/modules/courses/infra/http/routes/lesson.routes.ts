import { Router } from 'express';

import LessonsController from '../controllers/LessonsController';

const lessonRoutes = Router();
const lessonsController = new LessonsController();

lessonRoutes.get('/', lessonsController.index);

lessonRoutes.post('/', lessonsController.create);

export default lessonRoutes;