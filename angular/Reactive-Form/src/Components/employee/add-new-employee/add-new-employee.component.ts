import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from 'src/Model/Employee';
import { EmployeeService } from 'src/Service/employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  EmployeeForm!: FormGroup;
  departments: IDepartment[] = [];
  gender = ['Male','Female']
  
  constructor(private employeeService: EmployeeService) {
    this.employeeService.getDepartments().subscribe((data: IDepartment[]) => {
      this.departments = data;
      console.log(this.departments);      
    });
   }

  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl('Male', [Validators.required]),
      dateOfJoining: new FormControl(null, [Validators.required]),
      departmentId: new FormControl(null, [Validators.required]),
      designationId: new FormControl(null, [Validators.required]),
      employeeType: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required])
    })
  }

  get email() {
    return this.EmployeeForm.get('email');
  }

  get dateOfJoining() {
    return this.EmployeeForm.get('dateOfJoining');
  }
}
