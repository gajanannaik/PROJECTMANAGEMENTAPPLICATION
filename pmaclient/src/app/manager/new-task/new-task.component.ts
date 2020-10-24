import { Component, OnInit } from '@angular/core';
import {ProjectService } from '.././././././././../././project.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'newtask',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
tasks;
id;

_url ="http://localhost:3500/updateTask/";
  constructor(private projectdepend: ProjectService,private http:HttpClient ) { }

  ngOnInit() {
    //this.createTask(this.id)
  }
  createTask(id){  console.log(this.id)
    this.http.put(`${this._url}`+`${id}`,{
      task:this.tasks}).toPromise().then((data:any)=>{
        console.log(data)
        
      })
    
    
    }

}
