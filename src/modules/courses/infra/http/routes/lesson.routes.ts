import { Router } from 'express';

import LessonRepository from '@modules/courses/infra/typeorm/repositories/LessonRepository';
import CreateLessonService from '@modules/courses/services/CreateLessonService';

const lessonRoutes = Router();

// lessonRoutes.get('/', async (request, response) => {
//   const lessonRepository = getRepository(Lesson);

//   const lessons = await lessonRepository.find();
  
//   return response.json(lessons);
// });

lessonRoutes.post('/', async (request, response) => {
  const lessonRepository = new LessonRepository();

  const { name, description, link, module_id } = request.body;

  const createLessonService = new CreateLessonService(lessonRepository);

  const lesson = await createLessonService.execute({
    name,
    description,
    link,
    module_id
  });

  return response.json(lesson);
});

export default lessonRoutes;