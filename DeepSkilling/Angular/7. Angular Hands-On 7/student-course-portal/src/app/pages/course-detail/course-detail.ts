import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <div *ngIf="course; else notFound" class="card">
        <h2>{{ course.name }}</h2>
        <p><strong>Course Code:</strong> {{ course.code }}</p>
        <p><strong>Credits:</strong> {{ course.credits }}</p>
        <p><strong>Grade Status:</strong> {{ course.gradeStatus }}</p>
      </div>
      <ng-template #notFound>
        <h3>Course not found.</h3>
      </ng-template>
    </div>
  `,
  styles: [`
    .detail-container { padding: 20px; font-family: Arial, sans-serif; }
    .card { background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ccc; max-width: 600px;}
    h2 { margin-top: 0; color: #004d40; }
  `]
})
export class CourseDetail implements OnInit {
  course: Course | undefined;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.course = this.courseService.getCourseById(+idParam);
    }
  }
}
