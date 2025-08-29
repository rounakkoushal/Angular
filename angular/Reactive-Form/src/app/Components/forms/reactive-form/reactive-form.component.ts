import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  EmpDetails!: FormGroup;
  submittedData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.EmpDetails = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      EmailID: new FormControl(null, [Validators.required, Validators.email]),
      Gender: new FormControl("Male", [Validators.required]),
      DateofBirth: new FormControl(null, [Validators.required]),
      skill: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    });
  }

  get skillArray() {
    return this.EmpDetails.get('skill') as FormArray;
  }

  addSkill() {
    const lastSkill = this.skillArray.at(this.skillArray.length - 1);
    if (lastSkill.valid && lastSkill.value?.trim()) {
      this.skillArray.push(new FormControl(null, [Validators.required]));
    }
  }

  removeSkill(index: number) {
    if (this.skillArray.length > 1) {
      this.skillArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.EmpDetails.valid) {
      this.submittedData.push({ ...this.EmpDetails.value });
      this.EmpDetails.reset();
      this.EmpDetails.patchValue({ Gender: 'Male' });
      
      // Reset skills array to have one empty control
      while (this.skillArray.length > 1) {
        this.skillArray.removeAt(1);
      }
      this.skillArray.at(0).setValue(null);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.EmpDetails.controls).forEach(key => {
      const control = this.EmpDetails.get(key);
      if (control instanceof FormArray) {
        control.controls.forEach(c => c.markAsTouched());
      } else {
        control?.markAsTouched();
      }
    });
  }

  deleteRecord(index: number) {
    this.submittedData.splice(index, 1);
  }

  editRecord(index: number) {
    const record = this.submittedData[index];
    
    // Clear existing skills array
    while (this.skillArray.length > 0) {
      this.skillArray.removeAt(0);
    }
    
    // Add skills from record
    record.skill.forEach((skill: string) => {
      this.skillArray.push(new FormControl(skill, [Validators.required]));
    });
    
    // Patch other form values
    this.EmpDetails.patchValue({
      name: record.name,
      EmailID: record.EmailID,
      Gender: record.Gender,
      DateofBirth: record.DateofBirth
    });
    
    // Remove record from submitted data
    this.submittedData.splice(index, 1);
  }
}