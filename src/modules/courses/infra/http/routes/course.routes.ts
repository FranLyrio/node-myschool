import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';

const courseRoutes = Router();
const coursesController = new CoursesController();

courseRoutes.get('/', coursesController.index);

courseRoutes.post('/', coursesController.create);

export default courseRoutes;