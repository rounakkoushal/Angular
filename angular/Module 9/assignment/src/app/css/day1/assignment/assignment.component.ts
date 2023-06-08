import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
constructor(private route: Router){}
  onclick(){
this.route.navigate(['/cssday1'])
  }
}
