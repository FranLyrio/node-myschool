import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreateModuleTable1610373781731 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'module',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'course_id',
            type: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          }
        ]
      }),
    );

    await queryRunner.createForeignKey('module', new TableForeignKey({
      columnNames: ['course_id'],
      referencedTableName: 'course',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('module');
  }

}
