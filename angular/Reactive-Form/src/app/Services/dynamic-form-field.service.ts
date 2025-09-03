import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  accept?: string;
  options?: { key: string; value: string }[];
  validators: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DynamicFormFieldService {

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<FormField[]> {
    return this.http.get<FormField[]>('assets/form-fields.json');
  }
}