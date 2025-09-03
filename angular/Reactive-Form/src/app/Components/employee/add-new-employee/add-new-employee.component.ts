import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IDepartment, IDesignation } from 'src/app/Model/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  departments: IDepartment[] = [];
  designation: IDesignation[] = [];
  gender = ['Male', 'Female'];
  employeeFormValid = false;
  isEditMode = false;
  employeeId: number | null = null;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeService.getDepartments().subscribe({
      next: (data: IDepartment[]) => {
        this.departments = data;
      },
      error: (error) => {
        console.error('Error loading departments:', error);
      }
    });
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl('Male', [Validators.required]),
      dateOfJoining: new FormControl(null, [Validators.required]),
      departmentId: new FormControl(null, [Validators.required]),
      designationId: new FormControl(null, [Validators.required]),
      employeeType: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required, Validators.min(1)])
    });

    // this.employeeId = +this.route.snapshot.paramMap.get('id');
    // this.isEditMode = true;
    // this.loadEmployeeData();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.employeeId = +params['id'];
        this.loadEmployeeData();
      }
    });
  }

  // ngOnDestroy() {
  //   alert("Component Destroyed")
  // }

  loadEmployeeData() {
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (employee: any) => {
          this.employeeForm.patchValue({
            fullName: employee.fullName,
            email: employee.email,
            phone: employee.phone,
            gender: employee.gender,
            dateOfJoining: employee.dateOfJoining ? new Date(employee.dateOfJoining).toISOString().split('T')[0] : null,
            departmentId: employee.departmentId,
            designationId: employee.designationId,
            employeeType: employee.employeeType,
            salary: employee.salary
          });

          if (employee.departmentId) {
            this.employeeService.getDesignationsByDeptId(employee.departmentId).subscribe({
              next: (data: IDesignation[]) => {
                this.designation = data;
              },
              error: (error) => {
                console.error('Error loading designations:', error);
              }
            });
          }
        },
        error: (error) => {
          console.error('Error loading employee:', error);
        }
      });
    }
  }

  onDepartmentChange(event: any) {
    const departmentId = event.target.value;
    this.employeeForm.get('designationId')?.setValue(null);

    if (departmentId) {
      this.employeeService.getDesignationsByDeptId(departmentId).subscribe({
        next: (data: IDesignation[]) => {
          this.designation = data;
        },
        error: (error) => {
          console.error('Error loading designations:', error);
          this.designation = [];
        }
      });
    } else {
      this.designation = [];
    }
  }

  onCreateAccount() {
    this.employeeFormValid = true;

    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;

      if (this.isEditMode && this.employeeId) {
        formData.employeeId = this.employeeId;
        this.employeeService.updateEmployee(formData).subscribe({
          next: (data) => {
            console.log('Employee updated successfully:', data);
            this.router.navigate(['/employee/employeeList']);
          },
          error: (error) => {
            console.error('Error updating employee:', error);
          }
        });
      } else {
        this.employeeService.postEmployee(formData).subscribe({
          next: (data) => {
            console.log('Employee created successfully:', data);
            this.router.navigate(['/employee/employeeList']);
          },
          error: (error) => {
            console.error('Error creating employee:', error);
          }
        });
      }
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.employeeForm.controls).forEach(key => {
      this.employeeForm.get(key)?.markAsTouched();
    });
  }
  
  onPrevious() {
    this.employeeId--
    this.router.navigate(['/employee/employeeForm', this.employeeId])
  }

  onNext() {    
    this.employeeId++
    this.router.navigate(['/employee/employeeForm', this.employeeId])
  }

  get fullName() {
    return this.employeeForm.get('fullName');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  get dateOfJoining() {
    return this.employeeForm.get('dateOfJoining');
  }

  get departmentId() {
    return this.employeeForm.get('departmentId');
  }

  get designationId() {
    return this.employeeForm.get('designationId');
  }

  get employeeType() {
    return this.employeeForm.get('employeeType');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }
}
