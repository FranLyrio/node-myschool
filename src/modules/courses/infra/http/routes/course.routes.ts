import { Router } from 'express';

import CourseRepository from '@modules/courses/infra/typeorm/repositories/CourseRepository';
import CreateCourseService from '@modules/courses/services/CreateCourseService';

const courseRoutes = Router();
// courseRoutes.get('/', async (request, response) => {
//   const courseRepository = getRepository(Course);

//   const courses = await courseRepository.find();
  
//   return response.json(courses);

// });

courseRoutes.post('/', async (request, response) => {
  const courseRepository = new CourseRepository();

  const { name, description, color } = request.body;

  const createCourseService = new CreateCourseService(courseRepository);

  const course = await createCourseService.execute({
    name,
    description,
    color
  });

  return response.json(course);
});

export default courseRoutes;