import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-day5',
  templateUrl: './javascript-day5.component.html',
  styleUrls: ['./javascript-day5.component.css']
})
export class JavascriptDay5Component {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/javascript'])
  }
}
