import ICreateModuleDTO from '@modules/courses/dtos/ICreateModuleDTO';
import IModuleRepository from '@modules/courses/repositories/IModuleRepository';
import { getRepository, Repository } from 'typeorm';
import Module from '../entities/Module';

export default class ModuleRepository implements IModuleRepository {
  private ormRepository: Repository<Module>;

  constructor() {
    this.ormRepository = getRepository(Module);
  }

  public async findByName(name: string): Promise<Module | undefined> {
    const findedModule = await this.ormRepository.findOne({
      where: { name },
    });

    return findedModule || undefined;
  }

  public async create({
    name,
    description,
    course_id
  }: ICreateModuleDTO): Promise<Module> {
    const module = await this.ormRepository.save({
      name,
      description,
      course_id
    });

    return module;
  }
}