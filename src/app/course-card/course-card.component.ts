import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course = COURSES;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    console.log('card component - button clicked ...');
    this.courseSelected.emit(this.course);
  }
}
