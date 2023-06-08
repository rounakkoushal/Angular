import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day5-assignment',
  templateUrl: './javascript-day5-assignment.component.html',
  styleUrls: ['./javascript-day5-assignment.component.css']
})
export class JavascriptDay5AssignmentComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday5'])
  }
}
