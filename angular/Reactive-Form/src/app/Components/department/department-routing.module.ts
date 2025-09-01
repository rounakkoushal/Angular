import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentFormComponent } from './department-form/department-form.component';

const routes: Routes = [
  {
    path: '', component: DepartmentComponent, children: [
      { path: 'departmentList', component: DepartmentListComponent },
      { path: 'departmentForm', component: DepartmentFormComponent },
      { path: 'departmentForm/:id', component: DepartmentFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
export const departmentRoutingComponents = [
  DepartmentComponent,
  DepartmentListComponent,
  DepartmentFormComponent
]

