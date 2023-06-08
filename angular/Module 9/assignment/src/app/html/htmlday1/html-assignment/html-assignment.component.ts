import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-assignment',
  templateUrl: './html-assignment.component.html',
  styleUrls: ['./html-assignment.component.css']
})
export class HtmlAssignmentComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/htmlday1'])
  }

}
