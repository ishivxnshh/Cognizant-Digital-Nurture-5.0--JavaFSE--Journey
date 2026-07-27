import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {
  @ViewChild('enrollForm') enrollForm!: NgForm;

  hasUnsavedChanges(): boolean {
    return this.enrollForm ? (this.enrollForm.dirty || false) : false;
  }

  student = {
    name: '',
    email: '',
    courseId: '',
    semester: '',
    comments: ''
  };

  successMessage = '';

  onSubmit() {
    if (this.enrollForm.valid) {
      console.log('Form Submitted:', this.enrollForm.value);
      this.successMessage = 'Enrollment submitted successfully!';
    }
  }

  onReset() {
    this.enrollForm.resetForm();
    this.successMessage = '';
    this.student = {
      name: '',
      email: '',
      courseId: '',
      semester: '',
      comments: ''
    };
  }
}
