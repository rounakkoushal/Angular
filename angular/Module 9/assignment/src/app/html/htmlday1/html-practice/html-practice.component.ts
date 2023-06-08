import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-practice',
  templateUrl: './html-practice.component.html',
  styleUrls: ['./html-practice.component.css']
})
export class HtmlPracticeComponent {
  constructor(private route: Router) { }
  onclick() {
    this.route.navigate(['/htmlday1'])
  }
}
