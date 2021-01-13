import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';
import ICourseRepository from '../repositories/ICourseRepository';

import Course from '../infra/typeorm/entities/Course';

export default class CreateCourseService {
  constructor(
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