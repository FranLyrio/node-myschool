import { getRepository, Repository } from 'typeorm';

import ICourseRepository from '@modules/courses/repositories/ICourseRepository';
import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';

import Course from '../entities/Course';

export default class CourseRepository implements ICourseRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async findByName(name: string): Promise<Course | undefined> {
    const findedCourse = await this.ormRepository.findOne({
      where: { name },
    });

    return findedCourse || undefined;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const findedCourse = await this.ormRepository.findOne(id);

    return findedCourse || undefined;
  }

  public async create({
    name,
    color,
    description
  }: ICreateCourseDTO): Promise<Course> {
    const course = await this.ormRepository.save({
      name,
      color,
      description
    });

    return course;
  }
}