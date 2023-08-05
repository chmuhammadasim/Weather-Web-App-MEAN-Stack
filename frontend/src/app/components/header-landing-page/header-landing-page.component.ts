import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initTE, Dropdown, Collapse, Button, Ripple, Tab } from 'tw-elements';
import { AuthService } from 'src/app/sdk/services/authservice/auth.service';
@Component({
  selector: 'app-header-landing-page',
  templateUrl: './header-landing-page.component.html',
  styleUrls: ['./header-landing-page.component.css']
})
export class HeaderLandingPageComponent {
  constructor(
    private router:Router,
    private authService:AuthService,
  ){}
  ngOnInIt(){
    initTE({Collapse,Ripple,Tab,Dropdown,Button});
    this.checkExp();
  }
  checkExp(){
    const expDate =this.authService.getTokenExpiresIn();
    const expToken =this.authService.getTokenFromStorage();
    if(!expDate && !expToken)
    this.router.navigate(['login']);
    else{
      if (Date.now() > + expDate) {
        this.router.navigate(['tweather']);
      }else{
        this.router.navigate(['']);
      }
    }
  }
  checkToken():boolean{
    if(!localStorage.getItem('token'))
      return false;
    else return true;
  }
  tweather(){
    try {
      console.log("tweather");
      this.router.navigate(['tweather']);
    } catch (error) {
      this.router.navigate(['Error']);
      console.log(error);
    }
  }
  fweather(){
    try {
      console.log("fweather");
      this.router.navigate(['fweather']);
    } catch (error) {
      this.router.navigate(['Error']);
      console.log(error);
    }
  }
  login(){
    try {
      console.log("login");
      this.router.navigate(['login']);
    } catch (error) {
      this.router.navigate(['Error']);
      console.log(error);
    }
  }
  signUp(){
    try {
      console.log("signup successful");
      this.router.navigate(['signup']);
    } catch (error) {
      this.router.navigate(['Error']);
      console.log(error);
    }
  }
  logout(){
    this.authService.removeTokenExpiresIn();
    this.authService.removeTokenFromStorage();
    this.router.navigate(['']);
  }
  profile(){
    try {
      console.log("profile");
      this.router.navigate(['profile']);
    } catch (error) {
      this.router.navigate(['Error']);
      console.log(error);
    }
  }
}
