import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialState: EnrollmentState = {
  enrolledCourseIds: []
};

export const enrollmentReducer = createReducer(
  initialState,
  on(EnrollmentActions.enrollInCourse, (state, { id }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.includes(id) 
      ? state.enrolledCourseIds 
      : [...state.enrolledCourseIds, id]
  })),
  on(EnrollmentActions.unenrollFromCourse, (state, { id }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(courseId => courseId !== id)
  })),
  on(EnrollmentActions.setEnrolledCourses, (state, { ids }) => ({
    ...state,
    enrolledCourseIds: ids
  }))
);
