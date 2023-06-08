import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private router : Router,
    private http: HttpClient
    ) { }

  login(email:string, password:string){
    const url = 'http://localhost:3000/login'; // Update with your backend API URL
    const body = { "email" : email, "password" : password };
    return this.http.post(url, body);
  }

  register(email:string, password:string){
  }

  logout(){
  }




}
