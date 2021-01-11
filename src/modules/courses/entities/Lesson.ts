import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Module from './Module';

@Entity('lesson')
export default class Lesson {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  module_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @ManyToOne(() => Module)
  @JoinColumn({ name: 'module_id' })
  module: Module;
}