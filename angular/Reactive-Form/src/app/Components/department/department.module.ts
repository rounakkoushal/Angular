import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { departmentRoutingComponents, DepartmentRoutingModule } from './department-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [departmentRoutingComponents],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class DepartmentModule { }
