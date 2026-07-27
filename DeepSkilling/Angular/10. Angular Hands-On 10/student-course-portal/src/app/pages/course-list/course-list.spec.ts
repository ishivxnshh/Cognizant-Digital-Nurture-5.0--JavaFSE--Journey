import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseApiService } from '../../services/course-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import { Course } from '../../models/course.model';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;
  let mockCourseApi: jasmine.SpyObj<CourseApiService>;

  const mockCourses: Course[] = [
    { id: 1, name: 'Mock Course', code: 'M1', credits: 3, gradeStatus: 'pending' }
  ];

  beforeEach(async () => {
    mockCourseApi = jasmine.createSpyObj('CourseApiService', ['getCourses']);

    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectAllCourses, value: mockCourses },
            { selector: selectCoursesLoading, value: false },
            { selector: selectCoursesError, value: null },
            { selector: selectEnrolledCourseIds, value: [] }
          ]
        }),
        { provide: CourseApiService, useValue: mockCourseApi },
        { provide: Router, useValue: {} },
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { queryParamMap: { get: () => null } } }
        }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should dispatch loadCourses during initialization', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadCourses());
  });

  it('should render courses correctly from the mock store', () => {
    const courseCards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(courseCards.length).toBe(1);
  });
});
