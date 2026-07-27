import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;

  hasUnsavedChanges(): boolean {
    return this.enrollForm ? this.enrollForm.dirty : false;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [this.simulateEmailCheck.bind(this)]],
      courseId: ['', [Validators.required, this.noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // The getter keeps templates cleaner than repeatedly casting.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      // value excludes disabled controls.
      // getRawValue() includes every control.
      console.log('Form Value:', this.enrollForm.value);
      console.log('Raw Value:', this.enrollForm.getRawValue());
      alert('Enrollment submitted successfully!');
    }
  }

  noCourseCode(control: AbstractControl): ValidationErrors | null {
    if (control.value && typeof control.value === 'string' && control.value.startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value && typeof control.value === 'string' && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }
}
