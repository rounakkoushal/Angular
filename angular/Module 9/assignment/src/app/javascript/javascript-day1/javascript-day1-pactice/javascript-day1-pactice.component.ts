import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day1-pactice',
  templateUrl: './javascript-day1-pactice.component.html',
  styleUrls: ['./javascript-day1-pactice.component.css']
})
export class JavascriptDay1PacticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascriptday1'])
  }
}
