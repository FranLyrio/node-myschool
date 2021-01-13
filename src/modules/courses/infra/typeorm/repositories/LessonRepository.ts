import ICreateLessonDTO from '@modules/courses/dtos/ICreateLessonDTO';
import ILessonRepository from '@modules/courses/repositories/ILessonRepository';
import { getRepository, Repository } from 'typeorm';

import Lesson from '../entities/Lesson';

export default class LessonRepository implements ILessonRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async findByName(name: string): Promise<Lesson | undefined> {
    const findedLesson = await this.ormRepository.findOne({
      where: { name },
    });

    return findedLesson || undefined;
  }

  public async create({
    name,
    description,
    link
  }: ICreateLessonDTO): Promise<Lesson> {
    const lesson = await this.ormRepository.save({ name, description, link });

    return lesson;
  }
}