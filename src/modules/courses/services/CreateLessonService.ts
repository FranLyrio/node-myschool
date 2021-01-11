import { getRepository } from 'typeorm';

import Lesson from '../infra/database/entities/Lesson';

interface LessonDTO {
  name: string;
  description: string;
  link: string;
}

export default class CreateLessonService {
  public async execute({ 
    name,
    link,
    description
  }: LessonDTO): Promise<Lesson> {
    const lessonRepository = getRepository(Lesson);

    const lessonCreated = { name, link, description };

    const lesson = await lessonRepository.save(lessonCreated);

    return lesson;
  }
}