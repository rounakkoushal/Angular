import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-htmlday1',
  templateUrl: './htmlday1.component.html',
  styleUrls: ['./htmlday1.component.css']
})
export class Htmlday1Component {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/html'])
  }
}
