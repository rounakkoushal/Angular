import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentFormComponent } from './Components/department/department-form/department-form.component';
import { HomeComponent } from './Components/Shared/home/home.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeListComponent } from './Components/employee/employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './Components/employee/add-new-employee/add-new-employee.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { DepartmentComponent } from './Components/department/department.component';
import { FormsComponent } from './Components/forms/forms.component';
import { DynamicFormComponent } from './Components/forms/dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './Components/forms/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'employee', component: EmployeeComponent, children: [
          { path: 'employeeList', component: EmployeeListComponent },
          { path: 'employeeForm', component: AddNewEmployeeComponent },
          { path: 'employeeForm/:id', component: AddNewEmployeeComponent }
        ]
      },
      {
        path: 'department', component: DepartmentComponent, children: [
          { path: 'departmentList', component: DepartmentListComponent },
          { path: 'departmentForm', component: DepartmentFormComponent },
          { path: 'departmentForm/:id', component: DepartmentFormComponent }
        ]
      },
      {
        path: 'forms', component: FormsComponent, children: [
          { path: 'dynamicForm', component: DynamicFormComponent },
          { path: 'reactiveForm', component: ReactiveFormComponent }
        ]
      }
    ]
  },
  // { path: 'home', component: HomeComponent },
  // {
  //   path: 'employee', component: EmployeeComponent, children: [
  //     { path: 'employeeList', component: EmployeeListComponent },
  //     { path: 'employeeForm', component: AddNewEmployeeComponent },
  //     { path: 'employeeForm/:id', component: AddNewEmployeeComponent }
  //   ]
  // },
  // {
  //   path: 'department', component: DepartmentComponent, children: [
  //     { path: 'departmentList', component: DepartmentListComponent },
  //     { path: 'departmentForm', component: DepartmentFormComponent },
  //     { path: 'departmentForm/:id', component: DepartmentFormComponent }
  //   ]
  // },
  // {
  //   path: 'forms', component: FormsComponent, children: [
  //     { path: 'dynamicForm', component: DynamicFormComponent },
  //     { path: 'reactiveForm', component: ReactiveFormComponent }
  //   ]
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  EmployeeComponent,
  EmployeeListComponent,
  AddNewEmployeeComponent,
  DepartmentComponent,
  DepartmentListComponent,
  DepartmentFormComponent,
  FormsComponent,
  DynamicFormComponent,
  ReactiveFormComponent,
  NavbarComponent,
  PageNotFoundComponent]
