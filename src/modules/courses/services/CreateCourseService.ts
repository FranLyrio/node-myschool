import { inject, injectable } from 'tsyringe';

import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';
import ICourseRepository from '../repositories/ICourseRepository';

import Course from '../infra/typeorm/entities/Course';

@injectable()
export default class CreateCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute({
    name,
    color,
    description
  }: ICreateCourseDTO): Promise<Course> {
    const findCourseWithSameName = await this.courseRepository.findByName(name);

    if(findCourseWithSameName) {
      throw new Error('Esse curso já existe');
    }

    const course = await this.courseRepository.create({
      name,
      color,
      description
    });

    return course;
  }
}