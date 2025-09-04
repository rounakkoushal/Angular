import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormFieldService, FormField } from 'src/app/Services/dynamic-form-field.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm!: FormGroup;
  formFields: FormField[] = [];
  submittedData: any[] = [];

  constructor(private formBuilder: FormBuilder, private dynamicFormFieldService: DynamicFormFieldService) { }

  ngOnInit(): void {
    this.dynamicFormFieldService.getFormFields().subscribe({
      next: (res) => {
        this.formFields = res;
        this.buildForm();
      },
      error: (error) => {
        console.error('Error loading form fields:', error);
      }
    });
  }

  buildForm() {
    const formGroup: any = {};
    this.formFields.forEach(field => {
      const validators = [];

      if (field.validators.required) {
        validators.push(Validators.required);
      }
      if (field.validators.email) {
        validators.push(Validators.email);
      }
      if (field.validators.minLength) {
        validators.push(Validators.minLength(field.validators.minLength));
      }
      if (field.validators.maxLength) {
        validators.push(Validators.maxLength(field.validators.maxLength));
      }
      if (field.validators.min !== undefined) {
        validators.push(Validators.min(field.validators.min));
      }
      if (field.validators.max !== undefined) {
        validators.push(Validators.max(field.validators.max));
      }

      formGroup[field.name] = this.formBuilder.control('', validators);
    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      this.submittedData.push({ ...this.dynamicForm.value });
      this.dynamicForm.reset();
      console.log('Form Submitted!', this.submittedData);
    } else {
      this.dynamicForm.markAllAsTouched();
    }
  }

  deleteRecord(index: number) {
    this.submittedData.splice(index, 1);
  }

  onFileChange(event: Event, controlName: string) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
      this.dynamicForm.get(controlName)?.setValue(file);
    }
  }

  editRecord(index: number) {
    const record = this.submittedData[index];

    // Patch form values
    this.dynamicForm.patchValue(record);

    // Remove record from submitted data
    this.submittedData.splice(index, 1);
  }

  getColumnClass(fieldType: string): string {
    // Full width for textarea, range, and checkbox
    if (['textarea', 'range', 'checkbox'].includes(fieldType)) {
      return 'col-12 mb-3';
    }
    // Half width for other fields including file
    return 'col-md-6 mb-3';
  }
}
