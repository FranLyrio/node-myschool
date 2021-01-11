import { getRepository } from 'typeorm';

import Course from '../infra/database/entities/Course';

interface CourseDTO {
  name: string;
  description: string;
  color: string;
}

export default class CreateCourseService {
  public async execute({ 
    name,
    color,
    description
  }: CourseDTO): Promise<Course> {
    const courseRepository = getRepository(Course);

    const courseCreated = { name, color, description };

    const course = await courseRepository.save(courseCreated);

    return course;
  }
}