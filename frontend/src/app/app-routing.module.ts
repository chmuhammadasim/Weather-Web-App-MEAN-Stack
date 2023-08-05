import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Error404Component } from './pages/error404/error404.component';
import { TweatherComponent } from './pages/tweather/tweather.component';
import { FweatherComponent } from './pages/fweather/fweather.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {CloudinaryModule} from '@cloudinary/ng';
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'fweather', component: FweatherComponent},
  {path: 'tweather', component: TweatherComponent},
  { path: 'Error', component: Error404Component},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CloudinaryModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){}
}
