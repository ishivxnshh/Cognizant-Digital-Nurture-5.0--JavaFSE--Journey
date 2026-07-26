import { enrollmentReducer, initialState } from './enrollment.reducer';
import { enrollInCourse, unenrollFromCourse } from './enrollment.actions';

describe('Enrollment Reducer', () => {
  it('should add an ID on enrollInCourse and remain immutable', () => {
    const action = enrollInCourse({ id: 1 });
    const state = enrollmentReducer(initialState, action);

    expect(state).not.toBe(initialState);
    expect(state.enrolledCourseIds.length).toBe(1);
    expect(state.enrolledCourseIds).toContain(1);
  });

  it('should remove an ID on unenrollFromCourse and remain immutable', () => {
    const stateWithCourse = { enrolledCourseIds: [1, 2, 3] };
    const action = unenrollFromCourse({ id: 2 });
    const state = enrollmentReducer(stateWithCourse, action);

    expect(state).not.toBe(stateWithCourse);
    expect(state.enrolledCourseIds.length).toBe(2);
    expect(state.enrolledCourseIds).not.toContain(2);
  });
});
