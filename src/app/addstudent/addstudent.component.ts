import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../home/student';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
student:Student = new Student();
  constructor(private studentservice:StudentdataService,private router:Router) { }

  ngOnInit() {
  }
onsubmit(){
  this.studentservice.addstudent(this.student).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/students']);
  },error=>console.log(error));
  
  
}
}
