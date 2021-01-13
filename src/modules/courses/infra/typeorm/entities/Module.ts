import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Course from './Course';

@Entity('module')
export default class Module {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  course_id: string

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'course_id' })
  course: Course;
}