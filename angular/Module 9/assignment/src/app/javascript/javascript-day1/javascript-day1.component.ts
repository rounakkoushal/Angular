import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day1',
  templateUrl: './javascript-day1.component.html',
  styleUrls: ['./javascript-day1.component.css']
})
export class JavascriptDay1Component {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascript'])
  }
}
