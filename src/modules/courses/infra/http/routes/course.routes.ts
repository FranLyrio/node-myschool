import { Router } from 'express';
import { container } from 'tsyringe';

import CreateCourseService from '@modules/courses/services/CreateCourseService';

const courseRoutes = Router();
// courseRoutes.get('/', async (request, response) => {
//   const courseRepository = getRepository(Course);

//   const courses = await courseRepository.find();
  
//   return response.json(courses);

// });

courseRoutes.post('/', async (request, response) => {
  const { name, description, color } = request.body;

  const createCourseService = container.resolve(CreateCourseService);

  const course = await createCourseService.execute({
    name,
    description,
    color
  });

  return response.json(course);
});

export default courseRoutes;