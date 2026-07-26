import { createSelector } from '@ngrx/store';
import { selectAllCourses } from './course/course.selectors';
import { selectEnrolledCourseIds } from './enrollment/enrollment.selectors';
import { Course } from '../models/course.model';

export const selectEnrolledCoursesObjects = createSelector(
  selectAllCourses,
  selectEnrolledCourseIds,
  (courses: Course[], enrolledIds: number[]) => {
    return courses.filter(course => enrolledIds.includes(course.id));
  }
);
