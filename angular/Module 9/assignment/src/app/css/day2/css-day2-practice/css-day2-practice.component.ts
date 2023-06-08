import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-day2-practice',
  templateUrl: './css-day2-practice.component.html',
  styleUrls: ['./css-day2-practice.component.css']
})
export class CssDay2PracticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/cssday2'])
  }
}
