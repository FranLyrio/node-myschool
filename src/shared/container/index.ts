import { container } from 'tsyringe';

import ICourseRepository from '@modules/courses/repositories/ICourseRepository';
import CourseRepository from '@modules/courses/infra/typeorm/repositories/CourseRepository';

import IModuleRepository from '@modules/courses/repositories/IModuleRepository';
import ModuleRepository from '@modules/courses/infra/typeorm/repositories/ModuleRepository';

import ILessonRepository from '@modules/courses/repositories/ILessonRepository';
import LessonRepository from '@modules/courses/infra/typeorm/repositories/LessonRepository';

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  CourseRepository
);

container.registerSingleton<IModuleRepository>(
  'ModuleRepository',
  ModuleRepository
);

container.registerSingleton<ILessonRepository>(
  'LessonRepository',
  LessonRepository
);