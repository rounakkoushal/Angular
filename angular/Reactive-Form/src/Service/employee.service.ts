import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee, IDepartment } from 'src/Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees')
  }
  getDepartments():Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
  }

}
