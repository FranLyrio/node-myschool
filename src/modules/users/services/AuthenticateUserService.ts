import { sign } from 'jsonwebtoken';

import IAuthenticateDTO from '../dtos/IAuthenticateDTO';
import IUserRepository from '../repositories/IUserRepository';
import config from '@shared/config/auth';

import User from '../infra/typeorm/entities/User';

interface IResponse {
  token: string;
  authenticatedUser: User;
}

export default class AuthenticateUserService {
  constructor(
    public authenticateRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    password
  }: IAuthenticateDTO): Promise<IResponse> {
    const authenticatedUser = await this.authenticateRepository.signIn({
      email,
      password
    });

    if(!authenticatedUser) {
      throw new Error('Usuário ou senha inválidos.');
    }

    const token = sign({  }, config.jwt.secret, {
      subject: authenticatedUser.id,
      expiresIn: config.jwt.expiresIn,
    });

    return {
      authenticatedUser,
      token
    };
  }
}