import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import Course from '../infra/typeorm/entities/Course';

export default interface ICourseRepository {
  findByName(name: string): Promise<Course | undefined>;
  findById(id: string): Promise<Course | undefined>;
  create(data: ICreateCourseDTO): Promise<Course>;
}