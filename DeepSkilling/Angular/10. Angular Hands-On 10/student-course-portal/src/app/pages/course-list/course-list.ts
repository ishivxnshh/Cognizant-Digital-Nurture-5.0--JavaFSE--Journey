import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseApiService } from '../../services/course-api.service';
import { Course } from '../../models/course.model';
import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  currentSearch: string | null = null;
  newCourse: Course = { id: 0, name: '', code: '', credits: 3, gradeStatus: 'pending' };
  isEditing = false;

  constructor(
    private store: Store,
    private courseApi: CourseApiService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit() {
    this.currentSearch = this.route.snapshot.queryParamMap.get('search');
    this.store.dispatch(CourseActions.loadCourses());
  }

  goToCourse(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }

  onSubmit() {
    if (this.isEditing) {
      this.courseApi.updateCourse(this.newCourse).subscribe(() => {
        this.store.dispatch(CourseActions.loadCourses());
        this.resetForm();
      });
    } else {
      this.newCourse.id = Math.floor(Math.random() * 10000);
      this.courseApi.addCourse(this.newCourse).subscribe(() => {
        this.store.dispatch(CourseActions.loadCourses());
        this.resetForm();
      });
    }
  }

  editCourse(course: Course, event: Event) {
    event.stopPropagation();
    this.isEditing = true;
    this.newCourse = { ...course };
  }

  deleteCourse(id: number, event: Event) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseApi.deleteCourse(id).subscribe(() => {
        this.store.dispatch(CourseActions.loadCourses());
      });
    }
  }

  resetForm() {
    this.isEditing = false;
    this.newCourse = { id: 0, name: '', code: '', credits: 3, gradeStatus: 'pending' };
  }
}
