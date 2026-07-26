import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { EnrollmentGuard } from './guards/enrollment.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { 
    path: 'courses', 
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail }
    ]
  },
  { 
    path: 'enroll', 
    loadChildren: () => import('./features/enrollment/enrollment.routes').then(m => m.ENROLLMENT_ROUTES),
    canActivate: [EnrollmentGuard]
  },
  { path: 'profile', component: StudentProfile },
  { path: '**', component: NotFound }
];
