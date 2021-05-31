import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SinglestudentComponent } from './singlestudent/singlestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { UserstudentsComponent } from './userstudents/userstudents.component';


const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch:"full"
  },
  {
    path:"login",
    pathMatch:"full",
    component:LoginComponent
  },
  {
     path:"students",
     pathMatch:"full",
     component:HomeComponent

  },
  {
    path:"singlestudent/:id",
    pathMatch:"full",
    component:SinglestudentComponent
 },
 {
   path:"updatestudent/:id",
   pathMatch:"full",
   component:UpdatestudentComponent
 },
 {
   path:"addstudent",
   pathMatch:"full",
   component:AddstudentComponent
 },
 {
  path:"userstudents",
  pathMatch:"full",
  component:UserstudentsComponent,

}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
