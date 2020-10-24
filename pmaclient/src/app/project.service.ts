import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Employeedata} from './manager/employeeData'
import { EmployeeComponent } from './employee/employee.component';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
id: any
public _url = 'http://localhost:3500/find'
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private http : HttpClient) {}

  loadEmployee(id):Observable<Employeedata[]>{
    
    return this.http.get<Employeedata[]>(`${this._url}`)

  }
 
 

  }
  
