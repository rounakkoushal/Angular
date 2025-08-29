import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  siteUrl = "https://api.freeprojectapi.com/api/EmployeeApp/";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.siteUrl + 'GetDepartments');
  }

  getDepartmentById(id: number): Observable<IDepartment> {
    return this.http.get<IDepartment>(this.siteUrl + 'GetDepartmentById?id=' + id);
  }

  createDepartment(department: IDepartment): Observable<any> {
    return this.http.post(this.siteUrl + 'CreateDepartment', department);
  }

  updateDepartment(department: IDepartment): Observable<any> {
    return this.http.put(this.siteUrl + 'UpdateDepartment', department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(this.siteUrl + 'DeleteDepartment?id=' + id);
  }
}