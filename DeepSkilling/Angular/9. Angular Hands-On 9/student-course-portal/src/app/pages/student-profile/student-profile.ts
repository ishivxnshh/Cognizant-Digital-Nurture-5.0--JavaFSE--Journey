import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCoursesObjects } from '../../store/cross-slice.selectors';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {
  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.enrolledCourses$ = this.store.select(selectEnrolledCoursesObjects);
  }
}
