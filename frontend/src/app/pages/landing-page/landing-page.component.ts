import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initTE, Ripple, Collapse, Button, Dropdown, Tab } from 'tw-elements';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(
    private router : Router,
  ){
  }
  ngOnInit(){
    initTE({Collapse,Tab,Ripple,Button,Dropdown})
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
}
