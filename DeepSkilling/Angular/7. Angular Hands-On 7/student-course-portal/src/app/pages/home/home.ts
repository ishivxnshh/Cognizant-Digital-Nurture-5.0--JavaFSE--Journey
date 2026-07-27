import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  constructor(public courseService: CourseService, private router: Router) {}

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  onSearchChange(value: string) {
    if (value) {
      this.router.navigate(['/courses'], { queryParams: { search: value } });
    }
  }

  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}
