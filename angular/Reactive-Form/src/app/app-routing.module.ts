import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Shared/home/home.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { FormsComponent } from './Components/forms/forms.component';
import { DynamicFormComponent } from './Components/forms/dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './Components/forms/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/employee/employeeList' },
  {
    path: '', component: HomeComponent, children: [
      { path: 'employee', loadChildren: () => import('./Components/employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'department', loadChildren: () => import('./Components/department/department.module').then(m => m.DepartmentModule) },
      {
        path: 'forms', component: FormsComponent, children: [
          { path: 'dynamicForm', component: DynamicFormComponent },
          { path: 'reactiveForm', component: ReactiveFormComponent }
        ]
      },
      {
        path: 'rxjs-library', loadChildren: () => import('./Components/rx-js-library/rx-js-library.module').then(m => m.RxJsLibraryModule)
      },
      {
        path: 'ngrx-state-management', loadChildren: () => import('./Components/ngrx-state-management/ngrx-state-management.module').then(m => m.NgrxStateManagementModule)
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  FormsComponent,
  DynamicFormComponent,
  ReactiveFormComponent,
  NavbarComponent,
  PageNotFoundComponent]
