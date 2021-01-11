import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Lesson from '../../models/Lesson';
import LessonRepository from '../repositories/LessonRepository';

import CreateLessonService from '../services/CreateLessonService';

const lessonRoutes = Router();

lessonRoutes.get('/', async (request, response) => {
  try {
    const lessonRepository = getRepository(Lesson);

    const lessons = await lessonRepository.find();
    
    return response.json(lessons);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

lessonRoutes.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const lessonRepository = getCustomRepository(LessonRepository);
  
    const lesson = await lessonRepository.findById(id);
    
    return response.json(lesson);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

lessonRoutes.post('/', async (request, response) => {
  try {
    const { name, description, link } = request.body;

    const createLessonService = new CreateLessonService();
  
    const lesson = await createLessonService.execute({
      name,
      description,
      link
    });
  
    return response.json(lesson);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

export default lessonRoutes;