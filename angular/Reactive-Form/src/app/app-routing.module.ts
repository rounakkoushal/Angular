import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Shared/home/home.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { FormsComponent } from './Components/forms/forms.component';
import { DynamicFormComponent } from './Components/forms/dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './Components/forms/reactive-form/reactive-form.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { UserDashboardComponent } from './Components/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { AuthGuard, AdminGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
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
  PageNotFoundComponent,
  LoginComponent,
  RegisterComponent,
  UserDashboardComponent,
  AdminDashboardComponent]
