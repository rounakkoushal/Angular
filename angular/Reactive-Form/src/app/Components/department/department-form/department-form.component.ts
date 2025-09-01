import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/Service/department.service';

interface FormField {
  name: string;
  type: string;
  label: string;
  validators: any[];
  placeholder?: string;
}

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  departmentForm!: FormGroup;
  isEditMode = false;
  departmentId: number | null = null;
  formValid = false;

  formFields: FormField[] = [
    {
      name: 'departmentName',
      type: 'text',
      label: 'Department Name',
      validators: [Validators.required, Validators.minLength(3)],
      placeholder: 'Enter department name'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createDynamicForm();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.departmentId = +params['id'];
        this.loadDepartmentData();
      }
    });
  }

  createDynamicForm() {
    const formControls: any = {};
    
    this.formFields.forEach(field => {
      formControls[field.name] = ['', field.validators];
    });
    
    this.departmentForm = this.fb.group(formControls);
  }

  loadDepartmentData() {
    if (this.departmentId) {
      this.departmentService.getDepartmentById(this.departmentId).subscribe({
        next: (department) => {
          this.departmentForm.patchValue(department);
        },
        error: (error) => {
          console.error('Error loading department:', error);
        }
      });
    }
  }

  onSubmit() {
    this.formValid = true;
    
    if (this.departmentForm.valid) {
      const formData = this.departmentForm.value;
      
      if (this.isEditMode && this.departmentId) {
        formData.departmentId = this.departmentId;
        this.departmentService.updateDepartment(formData).subscribe({
          next: (data) => {
            console.log('Department updated successfully:', data);
            this.router.navigate(['/department/departmentList']);
          },
          error: (error) => {
            console.error('Error updating department:', error);
          }
        });
      } else {
        this.departmentService.createDepartment(formData).subscribe({
          next: (data) => {
            console.log('Department created successfully:', data);
            this.router.navigate(['/department/departmentList']);
          },
          error: (error) => {
            console.error('Error creating department:', error);
          }
        });
      }
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.departmentForm.controls).forEach(key => {
      this.departmentForm.get(key)?.markAsTouched();
    });
  }

  getFieldControl(fieldName: string) {
    return this.departmentForm.get(fieldName);
  }
}