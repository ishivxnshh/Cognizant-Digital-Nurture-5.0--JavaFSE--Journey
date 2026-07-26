import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;

  constructor(public enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Previous value', changes['course'].previousValue);
      console.log('Current value', changes['course'].currentValue);
    }
  }

  onEnrollClick() {
    if (!this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.enroll(this.course.id);
    } else {
      this.enrollmentService.unenroll(this.course.id);
    }
  }
}
