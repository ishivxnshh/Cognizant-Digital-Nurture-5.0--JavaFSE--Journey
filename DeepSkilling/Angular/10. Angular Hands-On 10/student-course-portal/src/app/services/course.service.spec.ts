import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all courses initially', () => {
    const courses = service.getCourses();
    expect(courses.length).toBeGreaterThan(0);
  });

  it('should getCourseById return the expected course', () => {
    const course = service.getCourseById(1);
    expect(course).toBeDefined();
    expect(course?.id).toBe(1);
  });

  it('should increase course count after addCourse()', () => {
    const initialCount = service.getCourses().length;
    service.addCourse({
      id: 99,
      name: 'Test Course',
      code: 'TEST1',
      credits: 3,
      gradeStatus: 'pending'
    });
    const newCount = service.getCourses().length;
    expect(newCount).toBe(initialCount + 1);
  });
});
