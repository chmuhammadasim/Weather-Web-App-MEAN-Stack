import { Observable } from 'rxjs';
import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/sdk/services/userService/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  name!: string;
  email!: string;
  constructor(
    private userService:UserService
  ){}
  ngOnInit(): void {
    this.getProfileData();
  }

 async getProfileData(){
    try {
      const observable =await this.userService.getUser();
      observable.subscribe((data: any) =>{
        this.name= data.data.data.name,
        this.email= data.data.data.email
      }
      );
    } catch (error) {
      console.log(error); 
    }
  }
}
