import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from './home/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
  students:Student;
  user:User= new User();
  UserName:string;
  Pass:string;


  constructor(private http:HttpClient, private router:Router) {
  
   }

  getstudentlist( ):Observable<Student[]>{
const headers = new HttpHeaders({Authorization: 'Basic '+ localStorage.getItem('auth')});

if(this.user.role=='ROLE_ADMIN'){
  return this.http.get<Student[]>("http://localhost:8080/admin/students",{headers});
}else{
  return this.http.get<Student[]>("http://localhost:8080/users/students",{headers});
}

  }

  getauthentication(username:string , password:string ):Observable<User>{
    let authdata = window.btoa(username+":"+password);
this.UserName=username;
this.Pass=password;
    localStorage.setItem("auth", authdata);
  
   
      this.getuserdetails().subscribe(data=>{
       this.user= data;
      }, error=> console.log(error));
      const headers = new HttpHeaders({ Authorization: 'Basic '+ btoa(username+":"+ password)});
       return this.http.get<User>("http://localhost:8080/auth"+`/${username}`,{headers});
  
     }

     getuserdetails():Observable<User>{
  
       const headers = new HttpHeaders({ Authorization: 'Basic '+ btoa(this.UserName+":"+ this.Pass)});
  
         return this.http.get<User>("http://localhost:8080/auth"+`/${this.UserName}`,{headers});
    
       }

  getstudentbyid(id:number):Observable<Student>{
    const headers = new HttpHeaders({Authorization: 'Basic '+ localStorage.getItem('auth')});
   
    if(this.user.role=='ROLE_ADMIN'){
      return this.http.get<Student>("http://localhost:8080/admin/students"+`/${id}`,{headers});
    }else{
      return this.http.get<Student>("http://localhost:8080/users/students"+`/${id}`,{headers});
    }
 }


 addstudent(student:Student):Observable<object>{
  const headers = new HttpHeaders({Authorization: 'Basic '+ localStorage.getItem('auth')});
   return this.http.post("http://localhost:8080/admin/students", student , {headers});
 }

 updatestudent(id:number, student:Student):Observable<object>{
  const headers = new HttpHeaders({Authorization: 'Basic '+ localStorage.getItem('auth')});
   return this.http.put("http://localhost:8080/admin/students"+`/${id}`, student,{headers});
 }

 deletestudent(id:number):Observable<object>{
  const headers = new HttpHeaders({Authorization: 'Basic '+ localStorage.getItem('auth')});
return this.http.delete("http://localhost:8080/admin/students"+`/${id}`,{headers});
 }

}
