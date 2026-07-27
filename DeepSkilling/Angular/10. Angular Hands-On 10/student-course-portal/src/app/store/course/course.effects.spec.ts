import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import { CourseEffects } from './course.effects';
import { CourseApiService } from '../../services/course-api.service';
import * as CourseActions from './course.actions';
import { Course } from '../../models/course.model';

describe('CourseEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: CourseEffects;
  let courseApi: jasmine.SpyObj<CourseApiService>;

  beforeEach(() => {
    courseApi = jasmine.createSpyObj('CourseApiService', ['getCourses']);

    TestBed.configureTestingModule({
      providers: [
        CourseEffects,
        provideMockActions(() => actions$),
        { provide: CourseApiService, useValue: courseApi }
      ]
    });

    effects = TestBed.inject(CourseEffects);
  });

  it('loadCourses should dispatch loadCoursesSuccess after receiving mock API data', () => {
    const mockCourses: Course[] = [{ id: 1, name: 'A', code: 'A', credits: 1, gradeStatus: 'pending' }];
    actions$ = of(CourseActions.loadCourses());
    courseApi.getCourses.and.returnValue(of(mockCourses));

    effects.loadCourses$.subscribe((action) => {
      expect(action).toEqual(CourseActions.loadCoursesSuccess({ courses: mockCourses }));
    });
  });

  it('API failure should dispatch loadCoursesFailure', () => {
    actions$ = of(CourseActions.loadCourses());
    courseApi.getCourses.and.returnValue(throwError(() => new Error('API down')));

    effects.loadCourses$.subscribe((action) => {
      expect(action).toEqual(CourseActions.loadCoursesFailure({ error: 'API down' }));
    });
  });
});
