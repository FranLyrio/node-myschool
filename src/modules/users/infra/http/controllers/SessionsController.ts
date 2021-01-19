import { Request, Response } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserRepository from '../../typeorm/repositories/UserRepository';

export default class SessionsController {
  public async create(
    request: Request,
    response: Response
  ): Promise<Response> {
    const authenticateRepository = new UserRepository();

    const { email, password } = request.body;
    
    const authenticateUserService = new AuthenticateUserService(
      authenticateRepository
    );

    const { authenticatedUser, token } = await authenticateUserService.execute({
      email,
      password
    });

    const authenticatedUserWithoutPassword = {
      id: authenticatedUser.id,
      name: authenticatedUser.name,
      email: authenticatedUser.email,
    };

    return response.json({ authenticatedUserWithoutPassword, token });
  }
}