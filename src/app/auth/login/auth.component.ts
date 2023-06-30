import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

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

  async loginClick() {
    try {
      const response = await firstValueFrom(this.auth.login(this.loginform.value.email, this.loginform.value.password));
      // Login successful, handle the response as needed
      console.log(response);
      this.router.navigate(['/findRecipe']);
    } catch (error) {
      // Login failed, handle the error
      console.error(error);
    }
  }
}
