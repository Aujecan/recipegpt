import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAreaComponentComponent } from './chat-area-component/chat-area-component.component';
import { AuthComponent } from './auth/login/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageComponent } from './auth/landing_page/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },

  {
    path: 'findRecipe',
    component: ChatAreaComponentComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: AuthComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


