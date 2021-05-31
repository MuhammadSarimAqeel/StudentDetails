import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../home/student';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
 id:number;
 student:Student = new Student();
  constructor(private route:ActivatedRoute, private studentservice:StudentdataService, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    this.studentservice.getstudentbyid(this.id).subscribe(data=>{
      this.student= data;
      }, error=> console.log(error)) 
  }


  onsubmit(){

    this.studentservice.updatestudent(this.id, this.student).subscribe(data=>{
      this.gotostudentlist();
    }, error=> console.log(error));
  }
    gotostudentlist(){
      this.router.navigate(['/students'])
    }
}
