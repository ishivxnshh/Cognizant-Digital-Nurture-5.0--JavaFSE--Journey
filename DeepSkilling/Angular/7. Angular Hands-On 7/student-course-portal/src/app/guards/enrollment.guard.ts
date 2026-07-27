import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentGuard implements CanActivate {
  constructor(private courseService: CourseService, private router: Router) {}

  canActivate(): boolean {
    if (this.courseService.getCourses().length > 0) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
