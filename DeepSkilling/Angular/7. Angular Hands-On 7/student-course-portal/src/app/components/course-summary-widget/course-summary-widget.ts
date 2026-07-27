import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  template: `
    <div class="widget">
      <h4>Course Summary Widget</h4>
      <p>Total Courses: {{ totalCourses }}</p>
      <p>Total Credits: {{ totalCredits }}</p>
    </div>
  `,
  styles: [`
    .widget {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 15px;
      border-radius: 4px;
      background-color: #e3f2fd;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h4 {
      margin-top: 0;
      color: #004d40;
    }
  `]
})
export class CourseSummaryWidget implements OnInit {
  totalCourses = 0;
  totalCredits = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    const courses = this.courseService.getCourses();
    this.totalCourses = courses.length;
    this.totalCredits = courses.reduce((acc, curr) => acc + curr.credits, 0);
  }
}
