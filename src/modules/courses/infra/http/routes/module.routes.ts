import { Router } from 'express';

import ModuleRepository from '@modules/courses/infra/typeorm/repositories/ModuleRepository';
import CreateModuleService from '@modules/courses/services/CreateModuleService';

const moduleRoutes = Router();

// moduleRoutes.get('/', async (request, response) => {
//   const moduleRepository = getRepository(Module);

//   const modules = await moduleRepository.find();
  
//   return response.json(modules);
// });

moduleRoutes.post('/', async (request, response) => {
  const moduleRepository = new ModuleRepository();

  const { name, description, course_id } = request.body;

  const createModuleService = new CreateModuleService(moduleRepository);

  const module = await createModuleService.execute({
    name,
    description,
    course_id
  });

  return response.json(module);
});

export default moduleRoutes;