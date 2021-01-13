import ICreateLessonDTO from "../dtos/ICreateLessonDTO";
import Lesson from "../infra/typeorm/entities/Lesson";

export default interface ILessonRepository {
  findByName(name: string): Promise<Lesson | undefined>;
  create(data: ICreateLessonDTO): Promise<Lesson>
}