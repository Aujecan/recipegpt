import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  email : string = '';
  password : string = '';

  public loginform: any;

  constructor(
    private router: Router,
    private auth: AuthService) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(this.email, [Validators.required]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  loginClick() {
    this.auth.login(this.loginform.value.email, this.loginform.value.password).subscribe(
      (response) => {
        // Login successful, handle the response as needed
        console.log(response);
        this.router.navigate(['/findRecipe'])
      },
      (error) => {
        // Login failed, handle the error
        console.error(error);
      }
    );
  }
}
