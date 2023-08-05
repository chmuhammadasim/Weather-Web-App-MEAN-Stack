import { Component,OnInit  } from '@angular/core';
import { AbstractControl,FormBuilder,Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { initTE, Button,Input } from 'tw-elements';
import { UserService } from 'src/app/sdk/services/userService/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(
    private formBuilder : FormBuilder,
    private userService: UserService,
    private route:Router,
  ){}
  registerForm!: FormGroup;
  loading :boolean =false;

  ngOnInit(){
    initTE({Button,Input});
    console.log('signup component initialized');
    this.formInitializer();

  }
  login(){
    try {
      console.log("login");
      this.route.navigate(['login']);
    } catch (error) {
      console.log(error);
      this.route.navigate(['Error']);
    }
  }
  formInitializer() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      profile_picture: [null, Validators.required],
      repassword: [
        '',[
          Validators.required,
          Validators.minLength(5),
          this.matchOtherValidator('password')
        ]]
    });
  }
  
  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } |null=> {
      const otherControl: AbstractControl | null = control.root.get(otherControlName);

      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }

      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }

  saveUser() {
    
    console.log("save user called");
    this.loading = true;
    
    this.userService.userRegister(this.registerForm.value).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.route.navigate(['login']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
        this.route.navigate(['Error']);
      }
    );
  }
}
