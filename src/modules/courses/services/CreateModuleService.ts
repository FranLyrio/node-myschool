import { getRepository } from 'typeorm';
import ICreateModuleDTO from '../dtos/ICreateModuleDTO';

import Module from '../infra/typeorm/entities/Module';
import IModuleRepository from '../repositories/IModuleRepository';

export default class CreateModuleService {
  constructor(
    private moduleRepository: IModuleRepository,
  ) {}
  
  public async execute({
    name,
    description,
    course_id
  }: ICreateModuleDTO): Promise<Module> {
    const findModuleWithSameName = await this.moduleRepository.findByName(name);

    if(findModuleWithSameName) {
      throw new Error('Esse módulo já existe');
    }

    const module = await this.moduleRepository.create({
      name,
      description,
      course_id
    });

    return module;
  }
}