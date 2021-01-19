import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUserRepository from '../repositories/IUserRepository';

export default class CreateUserService {
  constructor(
    public userRepository: IUserRepository,
  ) {}
  
  public async execute({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const checkUsersExists = await this.userRepository.findByEmail(email);

    if (checkUsersExists) {
      throw new Error('Esse usuário já existe.')
    }

    const user = await this.userRepository.create({ name, email, password });

    return user;
  }
}