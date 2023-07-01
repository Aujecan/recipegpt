import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatAreaComponentComponent } from './chat-area-component/chat-area-component.component';
import { AuthComponent } from './auth/login/auth.component';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LandingPageComponent } from './auth/landing_page/landing-page/landing-page.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    ChatAreaComponentComponent,
    AuthComponent,
    SignupComponent,
    ForgotpasswordComponent,
    LandingPageComponent,
    NaviBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
