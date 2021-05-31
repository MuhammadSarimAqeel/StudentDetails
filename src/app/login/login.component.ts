import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../home/student';
import { StudentdataService } from '../studentdata.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
    username:'';
    password:'';
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;
    messege:string;
    logoutsuccess= false;
    user:User= new User();

  constructor(private studentservice:StudentdataService, private router:Router) { }

  ngOnInit() {
   
  }


    
  handleLogin() {
    if(this.username !='' && this.password !=''){
      this.studentservice.getauthentication(this.username, this.password)
    .subscribe((data:any)=> {
      this.user=data;
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.'; 
      if(this.user.role=='ROLE_ADMIN'){
      this.router.navigate(['/students']);
      }else{
        this.router.navigate(['/userstudents']);
      }
      
    
    }, (error) => {
      this.invalidLogin = true;
      this.loginSuccess = false;
     
      
      console.log(error);     
    }); 
  }
  else{

    alert("both fields must be filled");
    } 
    
  }
}
