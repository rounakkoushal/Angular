import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent, children: [
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'employeeList/:id', component: EmployeeListComponent },
      { path: 'employeeForm', component: AddNewEmployeeComponent },
      { path: 'employeeForm/:id', component: AddNewEmployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
export const employeeRoutingComponents = [
  EmployeeComponent,
  EmployeeListComponent,
  AddNewEmployeeComponent
]
