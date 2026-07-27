import { selectEnrolledCourseIds } from './enrollment.selectors';
import { EnrollmentState } from './enrollment.reducer';

describe('Enrollment Selectors', () => {
  const initialState: EnrollmentState = {
    enrolledCourseIds: [1, 2, 3]
  };

  it('should selectEnrolledCourseIds', () => {
    const result = selectEnrolledCourseIds.projector(initialState);
    expect(result).toEqual([1, 2, 3]);
  });
});
