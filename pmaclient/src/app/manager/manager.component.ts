import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ProjectService } from '../project.service'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
progress=100;
empdata : any;
id : any;
  constructor(private route: ActivatedRoute ,
              private projectdepend: ProjectService ) { }

  ngOnInit() {
    
    //this.id = this.route.snapshot.params['id']
    this.loadEmployee(this.id);
  
  }

  loadEmployee(id){
     this.projectdepend.loadEmployee(id).subscribe(data => {
    this.empdata= data
    console.log(this.id)
  })
  
  }
  
}
