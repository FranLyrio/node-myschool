import ICreateModuleDTO from '../dtos/ICreateModuleDTO';
import Module from '../infra/typeorm/entities/Module';

export default interface IModuleRepository {
  create(data: ICreateModuleDTO): Promise<Module>
  findByName(name: string): Promise<Module | undefined>;
}