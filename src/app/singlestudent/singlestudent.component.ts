import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../home/student';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-singlestudent',
  templateUrl: './singlestudent.component.html',
  styleUrls: ['./singlestudent.component.css']
})
export class SinglestudentComponent implements OnInit {
  id:number;
 student: Student = new Student() ;
  constructor(private route: ActivatedRoute, private studentservice:StudentdataService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];  
    this.studentservice.getstudentbyid(this.id).subscribe(data=>{
      this.student= data;
      console.log(this.student);
      }, error=> console.log(error))

  }

}
