import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day1-assignment',
  templateUrl: './javascript-day1-assignment.component.html',
  styleUrls: ['./javascript-day1-assignment.component.css']
})
export class JavascriptDay1AssignmentComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday1'])
  }
}
