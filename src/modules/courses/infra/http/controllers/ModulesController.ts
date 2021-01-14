import { Request, Response } from 'express';
import CreateModuleService from '@modules/courses/services/CreateModuleService';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import Module from '../../typeorm/entities/Module';

export default class ModulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, course_id } = request.body;

    const createModuleService = container.resolve(CreateModuleService);

    const module = await createModuleService.execute({
      name,
      description,
      course_id
    });

    return response.json(module);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const moduleRepository = getRepository(Module);

    const modules = await moduleRepository.find();
    
    return response.json(modules);
  }
}