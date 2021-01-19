import IAuthenticateDTO from "../dtos/IAuthenticateDTO";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  signIn({ email, password }: IAuthenticateDTO): Promise<User | undefined>;
}