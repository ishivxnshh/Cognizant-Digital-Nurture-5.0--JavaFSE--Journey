import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CourseApiService } from './course-api.service';
import { Course } from '../models/course.model';

describe('CourseApiService', () => {
  let service: CourseApiService;
  let httpTestingController: HttpTestingController;

  const mockCourse: Course = { id: 1, name: 'Test', code: 'T1', credits: 3, gradeStatus: 'pending' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        CourseApiService
      ]
    });
    service = TestBed.inject(CourseApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('GET should call the correct API url', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(1);
      expect(courses[0]).toEqual(mockCourse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush([mockCourse]);
  });

  it('POST should call the correct API url', () => {
    service.addCourse(mockCourse).subscribe(course => {
      expect(course).toEqual(mockCourse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('POST');
    req.flush(mockCourse);
  });

  it('PUT should call the correct API url', () => {
    service.updateCourse(mockCourse).subscribe(course => {
      expect(course).toEqual(mockCourse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toBe('PUT');
    req.flush(mockCourse);
  });

  it('DELETE should call the correct API url', () => {
    service.deleteCourse(1).subscribe();

    const req = httpTestingController.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
