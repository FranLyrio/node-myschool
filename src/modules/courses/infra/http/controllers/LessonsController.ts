import { Request, Response } from 'express';
import CreateLessonService from '@modules/courses/services/CreateLessonService';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import Lesson from '../../typeorm/entities/Lesson';

export default class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, link, module_id } = request.body;

    const createLessonService = container.resolve(CreateLessonService);

    const lesson = await createLessonService.execute({
      name,
      description,
      link,
      module_id
    });

    return response.json(lesson);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const lessonRepository = getRepository(Lesson);

    const lessons = await lessonRepository.find();
    
    return response.json(lessons);
  }
}