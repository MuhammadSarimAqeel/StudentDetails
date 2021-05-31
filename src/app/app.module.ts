import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StudentdataService } from './studentdata.service';
import { SinglestudentComponent } from './singlestudent/singlestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UserstudentsComponent } from './userstudents/userstudents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SinglestudentComponent,
    UpdatestudentComponent,
    AddstudentComponent,
    UserstudentsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
