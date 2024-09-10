import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = {
    title: 'Angular-course',
  };

  onBtnClick() {
    alert('Hello');
  }
  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled ...', course);
  }
}
