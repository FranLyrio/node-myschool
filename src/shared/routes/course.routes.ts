import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Course from '../../models/Course';
import CourseRepository from '../repositories/CourseRepository';

import CreateCourseService from '../services/CreateCourseService';

const courseRoutes = Router();

courseRoutes.get('/', async (request, response) => {
  try {
    const courseRepository = getRepository(Course);

    const courses = await courseRepository.find();
    
    return response.json(courses);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

courseRoutes.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const courseRepository = getCustomRepository(CourseRepository);
  
    const course = await courseRepository.findById(id);
    
    return response.json(course);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

courseRoutes.post('/', async (request, response) => {
  try {
    const { name, description, color } = request.body;

    const createCourseService = new CreateCourseService();

    const course = await createCourseService.execute({
      name,
      description,
      color
    });

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

export default courseRoutes;