import { Request, Response } from 'express';
import CreateCourseService from '@modules/courses/services/CreateCourseService';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import Course from '../../typeorm/entities/Course';

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, color } = request.body;

    const createCourseService = container.resolve(CreateCourseService);

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