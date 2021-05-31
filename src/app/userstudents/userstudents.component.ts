import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../home/student';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-userstudents',
  templateUrl: './userstudents.component.html',
  styleUrls: ['./userstudents.component.css']
})
export class UserstudentsComponent implements OnInit {

  students:Student[];
  student:Student = new Student();
firstName:any; 

  constructor(private studentservice:StudentdataService, private router:Router) { }

  ngOnInit(): void {
    this.getstudents();
  }
  private getstudents(){
this.studentservice.getstudentlist().subscribe(data=>{
  this.students=data;
});
  }

  viewstudent(id:number){
    this.router.navigate(['/singlestudent', id]);
  }

      
 
  logout(){
    localStorage.removeItem("auth");
    this.router.navigate(['/login']);
  }

    search(){
      if(this.firstName==""){
        this.ngOnInit();
      }else{
        this.students = this.students.filter(res=>{

          return res.firstname.toLocaleLowerCase().match(this.firstName)
        })
      }
    }

}
