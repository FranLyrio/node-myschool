import { inject, injectable } from 'tsyringe';

import ICreateLessonDTO from '../dtos/ICreateLessonDTO';

import Lesson from '../infra/typeorm/entities/Lesson';
import ILessonRepository from '../repositories/ILessonRepository';

@injectable()
export default class CreateLessonService {
  constructor(
    @inject('LessonRepository')
    private lessonRepository: ILessonRepository,
  ) {}

  public async execute({ 
    name,
    link,
    description,
    module_id
  }: ICreateLessonDTO): Promise<Lesson> {
    const lessonCreated = { name, link, description, module_id };

    const findLessonWithSameName = await this.lessonRepository.findByName(name);

    if(findLessonWithSameName) {
      throw new Error('Essa aula já existe');
    }

    const lesson = await this.lessonRepository.create(lessonCreated);

    return lesson;
  }
}