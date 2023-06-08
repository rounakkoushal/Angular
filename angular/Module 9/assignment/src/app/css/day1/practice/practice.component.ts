import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/cssday1'])

  }
}
