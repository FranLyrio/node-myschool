import { EntityRepository, Repository } from 'typeorm';
import Lesson from '../models/Lesson';

@EntityRepository(Lesson)
export default class LessonRepository extends Repository<Lesson> {
  public async findById(id: string): Promise<Lesson | null> {
    const findLesson = await this.findOne({
      where: { id },
    });

    return findLesson || null;
  }
}