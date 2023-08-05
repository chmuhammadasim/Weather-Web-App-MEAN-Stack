import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { initTE, Button,Input } from 'tw-elements';
import { UserService } from 'src/app/sdk/services/userService/user.service';
import { AuthService } from 'src/app/sdk/services/authservice/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  loading:boolean=false;
 constructor(
  private formBuilder:FormBuilder,
  private router:Router,
  private userService:UserService,
  private authService:AuthService
 ){}
 ngOnInit(){
  console.log('login component initialized');
  initTE({Button,Input});
  this.formInitializer();
 }
 formInitializer() {
  
  this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });
}
save() {
  const loginData = this.loginForm.value;
  console.log('loginData', loginData);
  this.userService.userlogin(loginData).subscribe(
    data=>{
      console.log('got response from server', data);
      this.loading = false;
      this.authService.saveTokenToStorage(data.token);
      this.authService.saveTokenExpiresIn(data.ExpiresIn);
      this.router.navigate(['tweather']);
    },
    error=>{
      this.loading = false;
      console.log('error', error);
      this.router.navigate(['Error']);
    }
  );
}
signup(){
  try {
    console.log("signup");
    this.router.navigate(['signup']);
  } catch (error) {
    this.router.navigate(['Error']);
    console.log(error);
  }
}

}
