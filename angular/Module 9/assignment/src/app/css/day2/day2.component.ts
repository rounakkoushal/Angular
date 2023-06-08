import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/css'])
  }
}