import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseApiService } from '../../services/course-api.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  currentSearch: string | null = null;
  errorMessage = '';

  newCourse: Course = { id: 0, name: '', code: '', credits: 3, gradeStatus: 'pending' };
  isEditing = false;

  constructor(
    private courseApi: CourseApiService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentSearch = this.route.snapshot.queryParamMap.get('search');
    this.loadCourses();
  }

  loadCourses() {
    this.courseApi.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => this.errorMessage = 'Failed to load courses from API.'
    });
  }

  goToCourse(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }

  onSubmit() {
    if (this.isEditing) {
      this.courseApi.updateCourse(this.newCourse).subscribe(() => {
        this.loadCourses();
        this.resetForm();
      });
    } else {
      // In a real app we'd let json-server auto-increment ID, but we set it here if needed.
      this.newCourse.id = Math.floor(Math.random() * 10000);
      this.courseApi.addCourse(this.newCourse).subscribe(() => {
        this.loadCourses();
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
        this.loadCourses();
      });
    }
  }

  resetForm() {
    this.isEditing = false;
    this.newCourse = { id: 0, name: '', code: '', credits: 3, gradeStatus: 'pending' };
  }
}
