import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('course')
export default class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  color: string;
}