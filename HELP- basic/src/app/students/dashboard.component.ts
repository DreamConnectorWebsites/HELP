import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLinear = false;
  valbutton ="Save"; 
  constructor(private newService :CommonService,) {   } 
  Repdata;  

  ngOnInit(){
    this.newService.GetUser().subscribe(data => this.Repdata = data)
  }
  onSave = function(user) {    
    user.mode= this.valbutton;  
     this.newService.saveUser(user)  
     .subscribe(data =>  {  alert(data.data);  
          
       this.ngOnInit(); 
       console.log(user);
          
     }   
     , error => this.errorMessage = error )  
       
   }      
   edit = function(kk) {  
   this.enr_no = kk.enr_no;  
   this.std= kk.std;  
   this.div= kk.div;  
   this.first_name=kk.first_name;
   this.last_name=kk.last_name;
   this.email=kk.email;
   this.birth_date=kk.birth_date;
   this.admission_date=kk.admission_date;
   this.address=kk.address;
   this.city=kk.city;
   this.country=kk.country;
   this.postal_code=kk.postal_code;
   this.f_first_name=kk.f_first_name;
   this.f_last_name=kk.f_last_name;
   this.f_birth_date=kk.f_birth_date;
   this.f_blood_group=kk.f_blood_group;
   this.f_illness=kk.f_illness; 
   this.m_first_name=kk.m_first_name;
   this.m_last_name=kk.m_last_name;
   this.m_birth_date=kk.m_birth_date;
   this.m_blood_group=kk.m_blood_group;
   this.m_illness=kk.m_illness;
   this.valbutton ="Update";  
   }  
     
   delete = function(id) {  
   this.newService.deleteUser(id)  
   .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
   }  
}
