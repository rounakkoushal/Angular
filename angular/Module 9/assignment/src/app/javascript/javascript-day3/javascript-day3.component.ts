import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day3',
  templateUrl: './javascript-day3.component.html',
  styleUrls: ['./javascript-day3.component.css']
})
export class JavascriptDay3Component {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascript'])
  }
}
