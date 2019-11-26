import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  isLinear = false;
  valbutton ="Save"; 
  constructor(private newService :CommonService,) {   } 
  Repdata;  

  ngOnInit(){
    this.newService.GetUser().subscribe(data => this.Repdata = data)
  }
  onSave = function(user,isValid: boolean) {    
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
   this.valbutton ="Update";  
   }  
     
  //  delete = function(id) {  
  //  this.newService.deleteUser(id)  
  //  .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
  //  } 

}
