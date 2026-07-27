import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses = [
    { id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3 },
    { id: 2, name: 'Advanced TypeScript', code: 'TS201', credits: 4 },
    { id: 3, name: 'UI/UX Principles', code: 'DES101', credits: 2 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log(`Enrolling in course: ${courseId}`);
    this.selectedCourseId = courseId;
  }
}
