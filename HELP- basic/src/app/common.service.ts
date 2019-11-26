import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map' 
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }  

  // saveUser(){      
  //   return this.http.get('http://localhost:3000/') 
  //           .map((response: Response) =>response.json())              
  // }
  saveUser(user){      
    return this.http.post('http://localhost:3000/api/student/', user)  
            .map((response: Response) =>response.json())              
  }  

  // saveUser(user){      
  //   return this.http.post('http://localhost:8080/api/SaveUser/', user)  
  //           .map((response: Response) =>response.json())              
  // } 

  student(){
    return this.http.get('http://localhost:8080/api/student/')  
    .map((response: Response) => response.json())
  }
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
            .map((response: Response) => response.json())              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
            .map((response: Response) =>response.json())               
  }  
}
