import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment, IDesignation, IEmployee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  siteUrl = "https://api.freeprojectapi.com/api/EmployeeApp/";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.siteUrl + 'GetEmployees')
  }

  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.siteUrl + 'GetDepartments')
  }

  getDesignationsByDeptId(deptId: number): Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>(this.siteUrl + 'GetDesignationsByDeptId?deptId=' + deptId)
  }

  postEmployee(employee: IEmployee): Observable<any> {
    console.log(employee);

    return this.http.post(this.siteUrl + 'CreateEmployee', employee)
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.siteUrl + 'DeleteEmployee?id=' + id)
  }

  updateEmployee(employee: IEmployee): Observable<any> {
    console.log(employee);

    return this.http.put(this.siteUrl + 'UpdateEmployee', employee) 
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.siteUrl + id + '?id=' + id)
  }

}
