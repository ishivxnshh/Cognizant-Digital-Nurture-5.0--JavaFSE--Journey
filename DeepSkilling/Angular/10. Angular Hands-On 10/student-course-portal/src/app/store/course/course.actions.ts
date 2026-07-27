import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

export const loadCourses = createAction('[Course List] loadCourses');
export const loadCoursesSuccess = createAction(
  '[Course API] loadCoursesSuccess',
  props<{ courses: Course[] }>()
);
export const loadCoursesFailure = createAction(
  '[Course API] loadCoursesFailure',
  props<{ error: string }>()
);
