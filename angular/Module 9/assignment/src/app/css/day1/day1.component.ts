import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component {
  constructor(private route: Router){}
  onclick(){
this.route.navigate(['/css'])
  }
}

