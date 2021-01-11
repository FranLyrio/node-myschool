import { Router } from 'express';
import courseRoutes from '../../../../modules/courses/infra/http/routes/course.routes';
import moduleRoutes from '../../../../modules/courses/infra/http/routes/module.routes';
import lessonRoutes from '../../../../modules/courses/infra/http/routes/lesson.routes';

const router = Router();

router.use('/courses', courseRoutes);
router.use('/modules', moduleRoutes);
router.use('/lessons', lessonRoutes);

export default router;