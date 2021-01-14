import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../../typeorm/entities/Lesson';

import CreateLessonService from '@modules/courses/services/CreateLessonService';
import LessonRepository from '../../typeorm/repositories/LessonRepository';

export default class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const lessonRepository = getRepository(Lesson);

    const lessons = await lessonRepository.find();
    
    return response.json(lessons);
  }
}