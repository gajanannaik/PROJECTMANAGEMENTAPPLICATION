import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService } from '../project.service'
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 id:any;
 empdata:any;  notes:""

 
  constructor(private route:ActivatedRoute,private projectdependency:ProjectService,private http:HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     this.loadEmployee(this.id);

  }
  loadEmployee(id){
    this.projectdependency.loadEmployee(id).subscribe(data => {
      this.empdata= data
    })

  }
  


addnote(id)
{  console.log(this.id)
this.http.put('http://localhost:3500/updateNotes/'+id,{
  note:this.notes}).toPromise().then((data:any)=>{
    console.log(data)
  })


}
}
