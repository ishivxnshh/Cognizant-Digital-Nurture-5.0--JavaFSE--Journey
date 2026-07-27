import { selectAllCourses, selectCoursesLoading, selectCoursesError } from './course.selectors';
import { CourseState } from './course.reducer';
import { Course } from '../../models/course.model';

describe('Course Selectors', () => {
  const initialState: CourseState = {
    courses: [{ id: 1, name: 'Test', code: 'T1', credits: 3, gradeStatus: 'pending' } as Course],
    loading: true,
    error: 'API Error'
  };

  it('should selectAllCourses', () => {
    const result = selectAllCourses.projector(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(1);
  });

  it('should selectCoursesLoading', () => {
    const result = selectCoursesLoading.projector(initialState);
    expect(result).toBeTrue();
  });

  it('should selectCoursesError', () => {
    const result = selectCoursesError.projector(initialState);
    expect(result).toEqual('API Error');
  });
});
