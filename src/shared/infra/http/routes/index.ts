import { Router } from 'express';
import courseRoutes from '../../../../modules/courses/infra/http/routes/course.routes';
import moduleRoutes from '../../../../modules/courses/infra/http/routes/module.routes';
import lessonRoutes from '../../../../modules/courses/infra/http/routes/lesson.routes';
import sessionsRoutes from '../../../../modules/users/infra/http/routes/sessions.routes';
import usersRoutes from '../../../../modules/users/infra/http/routes/users.routes';

const router = Router();

router.use('/courses', courseRoutes);
router.use('/modules', moduleRoutes);
router.use('/lessons', lessonRoutes);
router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);

export default router;