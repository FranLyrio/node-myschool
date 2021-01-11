import { EntityRepository, Repository } from 'typeorm';
import Module from '../infra/database/entities/Module';

@EntityRepository(Module)
export default class ModuleRepository extends Repository<Module> {
  public async findById(id: string): Promise<Module | null> {
    const findModule = await this.findOne({
      where: { id },
    });

    return findModule || null;
  }
}