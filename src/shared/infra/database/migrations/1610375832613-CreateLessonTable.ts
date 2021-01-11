import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateLessonTable1610375832613 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'lesson',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'module_id',
						type: 'uuid'
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'link',
						type: 'varchar'
					}
				]
			}),
		);

		await queryRunner.createForeignKey('lesson', new TableForeignKey({
			columnNames: ['module_id'],
			referencedTableName: 'module',
			referencedColumnNames: ['id'],
			onDelete: 'CASCADE'
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('lesson')
	}

}
