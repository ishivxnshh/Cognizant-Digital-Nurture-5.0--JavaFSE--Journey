import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3, gradeStatus: 'pending' },
    { id: 2, name: 'Advanced TypeScript', code: 'TS201', credits: 4, gradeStatus: 'pending' },
    { id: 3, name: 'UI/UX Principles', code: 'DES101', credits: 2, gradeStatus: 'passed' },
    { id: 4, name: 'State Management', code: 'NGRX101', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Web Performance', code: 'PERF101', credits: 3, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
