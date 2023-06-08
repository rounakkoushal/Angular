import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-day2-assignment',
  templateUrl: './css-day2-assignment.component.html',
  styleUrls: ['./css-day2-assignment.component.css']
})
export class CssDay2AssignmentComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/cssday2'])
  }
}
