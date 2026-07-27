import { Routes } from '@angular/router';
import { EnrollmentForm } from './enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form/reactive-enrollment-form';
import { CanDeactivateGuard } from '../../guards/can-deactivate.guard';

export const ENROLLMENT_ROUTES: Routes = [
  { path: '', component: EnrollmentForm, canDeactivate: [CanDeactivateGuard] },
  { path: 'reactive', component: ReactiveEnrollmentForm, canDeactivate: [CanDeactivateGuard] }
];
