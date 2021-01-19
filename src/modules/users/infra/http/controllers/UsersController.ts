import { hash } from 'bcryptjs';
import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    
    const { name, email, password } = request.body;

    const hashedPassword = await hash(password, 8);

    const createUserService = new CreateUserService(userRepository);
    
    await createUserService.execute({
      name,
      email,
      password: hashedPassword
    });
    
    return response.json({ name, email });
  }
}