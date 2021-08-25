import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import { Student } from './student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students:Student[];
  student:Student = new Student();
firstName:any;  

  constructor(private studentservice:StudentdataService, private router:Router, private zone:NgZone) { }

  ngOnInit(): void {
    this.zone.run(() => {
    setTimeout(() => {
      localStorage.removeItem('auth');
      this.router.navigate(['/login']);
      console.log("in time");
      
    }, 3000);
  });
  
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
  updatestudent(id:number){
    this.router.navigate(['/updatestudent', id]);
      }
      
  deletestudent(id:number){
    this.studentservice.deletestudent(id).subscribe(data=>{
      this.getstudents();
    },error=>console.log(error));
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

