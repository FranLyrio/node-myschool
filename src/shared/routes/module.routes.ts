import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Module from '../../models/Module';

import ModuleRepository from '../repositories/ModuleRepository';
import CreateModuleService from '../services/CreateModuleService';

const moduleRoutes = Router();

moduleRoutes.get('/', async (request, response) => {
  try {
    const moduleRepository = getRepository(Module);

    const modules = await moduleRepository.find();
    
    return response.json(modules);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

moduleRoutes.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const moduleRepository = getCustomRepository(ModuleRepository);
  
    const module = await moduleRepository.findById(id);
    
    return response.json(module);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

moduleRoutes.post('/', async (request, response) => {
  try {
    const { name, description, course_id } = request.body;

    const createModuleService = new CreateModuleService();
  
    const module = await createModuleService.execute({
      name,
      description,
      course_id
    });
  
    return response.json(module);
  } catch (error) {
    return response.status(400).json({ err: error.message });
  }
});

export default moduleRoutes;