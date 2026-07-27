import { selectEnrolledCoursesObjects } from './cross-slice.selectors';
import { Course } from '../models/course.model';

describe('Cross Slice Selectors', () => {
  it('should return populated course objects for enrolled IDs', () => {
    const courses: Course[] = [
      { id: 1, name: 'A', code: 'A', credits: 1, gradeStatus: 'pending' },
      { id: 2, name: 'B', code: 'B', credits: 1, gradeStatus: 'pending' }
    ];
    const enrolledIds = [2];

    const result = selectEnrolledCoursesObjects.projector(courses, enrolledIds);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2);
  });
});
