import IAuthenticateDTO from '@modules/users/dtos/IAuthenticateDTO';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUserRepository from '@modules/users/repositories/IUserRepository';

import { compare } from 'bcryptjs';
import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string) {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user || undefined;
  }
  
  public async create({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.save({
      name,
      email,
      password
    });

    return user;
  }

  public async signIn({
    email, password
  }: IAuthenticateDTO): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email }
    });

    if(user) {
      compare(user.password, password);
    }

    return user || undefined;
  }
}