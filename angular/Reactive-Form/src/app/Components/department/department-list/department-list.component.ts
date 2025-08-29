import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepartment } from 'src/app/Model/Employee';
import { DepartmentService } from 'src/app/Service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: IDepartment[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) {
    this.loadDepartments();
  }

  ngOnInit(): void {
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe({
      next: (data: IDepartment[]) => {
        this.departments = data;
      },
      error: (error) => {
        console.error('Error loading departments:', error);
      }
    });
  }

  editDepartment(department: IDepartment) {
    this.router.navigate(['/home/department/departmentForm', department.departmentId]);
  }

  deleteDepartment(departmentId: number) {
    this.departmentService.deleteDepartment(departmentId).subscribe({
      next: (data) => {
        console.log('Department deleted successfully:', data);
        this.departments = this.departments.filter(dept => dept.departmentId !== departmentId);
      },
      error: (error) => {
        console.error('Error deleting department:', error);
      }
    });
  }
}