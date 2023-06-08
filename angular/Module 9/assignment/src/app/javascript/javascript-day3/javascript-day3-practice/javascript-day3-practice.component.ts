import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day3-practice',
  templateUrl: './javascript-day3-practice.component.html',
  styleUrls: ['./javascript-day3-practice.component.css']
})
export class JavascriptDay3PracticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday3'])
  }
}
