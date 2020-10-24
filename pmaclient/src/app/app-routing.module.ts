import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { NewTaskComponent } from './manager/new-task/new-task.component'

const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  
   { path:'login',component:LoginComponent},
  { path:'app-home', component:HomeComponent},
  {path:'app-employee',component:EmployeeComponent},
  {path:'app-manager',component:ManagerComponent},
  {path:'app-manager/:id',component:ManagerComponent},
  {path:'newtask',component:NewTaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
