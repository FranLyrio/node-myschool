import { Router } from 'express';
import { container } from 'tsyringe';

import CreateModuleService from '@modules/courses/services/CreateModuleService';

const moduleRoutes = Router();

// moduleRoutes.get('/', async (request, response) => {
//   const moduleRepository = getRepository(Module);

//   const modules = await moduleRepository.find();
  
//   return response.json(modules);
// });

moduleRoutes.post('/', async (request, response) => {
  const { name, description, course_id } = request.body;

  const createModuleService = container.resolve(CreateModuleService);

  const module = await createModuleService.execute({
    name,
    description,
    course_id
  });

  return response.json(module);
});

export default moduleRoutes;