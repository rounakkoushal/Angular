import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/Model/Employee';
import { EmployeeService } from 'src/Service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {
    employeeService.getEmployee().subscribe((data: IEmployee[]) => {
      this.employees = data;
    });
  }

  ngOnInit(): void {

  }
  editEmployee(employee: IEmployee) {
    console.log(employee);
  }

  deleteEmployee(employeeId: number) {
    console.log(employeeId);
  }
}
