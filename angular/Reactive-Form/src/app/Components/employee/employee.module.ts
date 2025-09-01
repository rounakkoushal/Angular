import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeeRoutingComponents, EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [employeeRoutingComponents],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
