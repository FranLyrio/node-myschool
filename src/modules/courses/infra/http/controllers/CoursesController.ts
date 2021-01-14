import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Course from '../../typeorm/entities/Course';
import CreateCourseService from '@modules/courses/services/CreateCourseService';
import CourseRepository from '../../typeorm/repositories/CourseRepository';

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const courseRepository = new CourseRepository();

    const { name, description, color } = request.body;

    const createCourseService = new CreateCourseService(courseRepository);

    const course = await createCourseService.execute({
      name,
      description,
      color
    });

    return response.json(course);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const courseRepository = getRepository(Course);

    const courses = await courseRepository.find();
    
    return response.json(courses);
  }
}