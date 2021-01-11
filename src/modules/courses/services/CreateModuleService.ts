import { getRepository } from 'typeorm';

import Module from '../models/Module';

interface ModuleDTO {
  name: string;
  description: string;
  course_id: string;
}

export default class CreateModuleService {
  public async execute({ 
    name,
    description,
    course_id
  }: ModuleDTO): Promise<Module> {
    const moduleRepository = getRepository(Module);

    const moduleCreated = { name, description, course_id };

    const module = await moduleRepository.save(moduleCreated);

    return module;
  }
}