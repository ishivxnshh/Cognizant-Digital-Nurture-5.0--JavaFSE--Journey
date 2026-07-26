import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  currentSearch: string | null = null;

  constructor(
    private courseService: CourseService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    
    // Read query parameter
    this.currentSearch = this.route.snapshot.queryParamMap.get('search');
  }

  goToCourse(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }
}
