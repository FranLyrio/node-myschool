
import ICreateLessonDTO from '../dtos/ICreateLessonDTO';

import ILessonRepository from '../repositories/ILessonRepository';

export default class CreateLessonService {
  constructor(
    private lessonRepository: ILessonRepository,
  ) {}

  public async execute({ 
    name,
    link,
    description,
    module_id
  }: ICreateLessonDTO): Promise<ICreateLessonDTO> {
    const lessonCreated = { name, link, description, module_id };

    const findLessonWithSameName = await this.lessonRepository.findByName(name);

    if(findLessonWithSameName) {
      throw new Error('Essa aula já existe');
    }

    const lesson = await this.lessonRepository.create(lessonCreated);

    return lesson;
  }
}