import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/Model/Employee';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
    employeeService.getEmployee().subscribe((data: IEmployee[]) => {
      this.employees = data;
    });
  }

  ngOnInit(): void {

  }
  editEmployee(employee: IEmployee) {
    this.router.navigate(['/home/employee/employeeForm', employee.employeeId]);
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: (data) => {
        console.log('Employee deleted successfully:', data);
        this.employees = this.employees.filter(emp => emp.employeeId !== employeeId);
      },
      error: (error) => {
        console.error('Error deleting employee:', error);
      }
    });
  }
}
