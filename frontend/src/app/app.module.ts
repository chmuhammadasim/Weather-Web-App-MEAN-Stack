import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HeaderLandingPageComponent } from './components/header-landing-page/header-landing-page.component';
import { FooterLandingPageComponent } from './components/footer-landing-page/footer-landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Error404Component } from './pages/error404/error404.component';
import { TweatherComponent } from './pages/tweather/tweather.component';
import { FweatherComponent } from './pages/fweather/fweather.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderLandingPageComponent,
    FooterLandingPageComponent,
    LoginComponent,
    SignupComponent,
    Error404Component,
    TweatherComponent,
    FweatherComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
