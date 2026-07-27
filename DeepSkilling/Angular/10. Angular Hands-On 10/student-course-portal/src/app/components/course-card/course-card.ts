import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnInit {
  @Input() course!: Course;
  
  isEnrolled$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isEnrolled$ = this.store.select(selectEnrolledCourseIds).pipe(
      map(ids => ids.includes(this.course.id))
    );
  }

  onEnrollClick(isEnrolled: boolean) {
    if (isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ id: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ id: this.course.id }));
    }
  }
}
