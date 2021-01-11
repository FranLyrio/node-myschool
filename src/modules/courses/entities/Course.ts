import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Module from './Module';

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