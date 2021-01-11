import { EntityRepository, Repository } from 'typeorm';
import Course from '../infra/database/entities/Course';

@EntityRepository(Course)
export default class CourseRepository extends Repository<Course> {
  public async findById(id: string): Promise<Course | null> {
    const findCourse = await this.findOne({
      where: { id },
    });

    return findCourse || null;
  }
}