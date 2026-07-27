import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course: any;
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Previous value', changes['course'].previousValue);
      console.log('Current value', changes['course'].currentValue);
    }
  }

  onEnroll() {
    if (this.course && this.course.id) {
      this.enrollRequested.emit(this.course.id);
    }
  }
}
