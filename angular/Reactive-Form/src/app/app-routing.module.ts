import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from 'src/Components/department/department.component';
import { AddNewEmployeeComponent } from 'src/Components/employee/add-new-employee/add-new-employee.component';
import { EmployeeListComponent } from 'src/Components/employee/employee-list/employee-list.component';
import { EmployeeComponent } from 'src/Components/employee/employee.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { NavbarComponent } from 'src/Components/navbar/navbar.component';
import { PageNotFoundComponent } from 'src/Components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/employee/employeeList' },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'employee', component: EmployeeComponent, children: [
          { path: 'employeeList', component: EmployeeListComponent },
          { path: 'addNewEmployee', component: AddNewEmployeeComponent }
        ]
      },
      { path: 'department', component: DepartmentComponent }
    ]
  },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, EmployeeComponent, DepartmentComponent, NavbarComponent, PageNotFoundComponent]
