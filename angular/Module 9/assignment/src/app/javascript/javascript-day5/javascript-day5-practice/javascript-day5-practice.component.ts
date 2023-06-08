import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day5-practice',
  templateUrl: './javascript-day5-practice.component.html',
  styleUrls: ['./javascript-day5-practice.component.css']
})
export class JavascriptDay5PracticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday5'])
  }
}
