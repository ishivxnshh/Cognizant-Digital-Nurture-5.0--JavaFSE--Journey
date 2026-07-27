import { createAction, props } from '@ngrx/store';

export const enrollInCourse = createAction(
  '[Enrollment] enrollInCourse',
  props<{ id: number }>()
);

export const unenrollFromCourse = createAction(
  '[Enrollment] unenrollFromCourse',
  props<{ id: number }>()
);

export const setEnrolledCourses = createAction(
  '[Enrollment] setEnrolledCourses',
  props<{ ids: number[] }>()
);
