import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/Model/Employee';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = [];
  selectedEmployeeId: number | null = null;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) {
    employeeService.getEmployee().subscribe((data: IEmployee[]) => {
      this.employees = data;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.selectedEmployeeId = +params['id'];
      }
    });
  }

  isSelected(employee: IEmployee): boolean {
    return employee.employeeId === this.selectedEmployeeId;
  }
  
  editEmployee(employee: IEmployee) {
    this.router.navigate(['/employee/employeeForm', employee.employeeId]);
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
