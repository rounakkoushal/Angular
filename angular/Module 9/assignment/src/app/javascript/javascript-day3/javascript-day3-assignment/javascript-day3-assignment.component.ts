import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day3-assignment',
  templateUrl: './javascript-day3-assignment.component.html',
  styleUrls: ['./javascript-day3-assignment.component.css']
})
export class JavascriptDay3AssignmentComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday3'])
  }
}
