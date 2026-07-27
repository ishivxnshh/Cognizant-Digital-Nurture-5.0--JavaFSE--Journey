import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import { By } from '@angular/platform-browser';

describe('CourseCardComponent', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const initialState = {
    enrollment: {
      enrolledCourseIds: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({ 
          initialState,
          selectors: [
            { selector: selectEnrolledCourseIds, value: [] }
          ]
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    
    // Assign Input
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    };
    
    fixture.detectChanges();
  });

  it('1. should create', () => {
    expect(component).toBeTruthy();
  });

  it('2. should render @Input course name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3 = compiled.querySelector('h3');
    expect(h3?.textContent).toContain('Data Structures');
  });

  it('3. should dispatch enrollInCourse when Enroll is clicked', () => {
    // Component initialized with empty enrolled array -> renders Enroll button
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', new Event('click'));
    
    expect(store.dispatch).toHaveBeenCalledWith(enrollInCourse({ id: 1 }));
  });
});
