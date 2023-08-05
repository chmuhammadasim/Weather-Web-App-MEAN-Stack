import { Injectable } from '@angular/core';
import { WeatherConfig } from '../../weather.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService:AuthService,
  ) { }
  public userlogin(credential:object):Observable<any>{
      console.log("Sending user login info to server...(userServicets)");
      const url= WeatherConfig.getPath()+'/users/login';
      console.log("Sended user login info to server(userServicets)")
      return this.http.post(url,credential);
  }
  public userRegister(credential:any):Observable<any>{
      console.log("sending Signup info to server...(userServicets)");
      const url= WeatherConfig.getPath()+'/users/signup';
      console.log("sended Signup info to server(userServicets)");
      return this.http.post(url,credential);
  }

  public async getUser():Promise<any>{
      console.log("Getting user information from server...(userServicets)");
      const apiUrl = WeatherConfig.getPath()+`/users/u`;
      const token= await this.authService.getTokenFromStorage();
      var headers = new HttpHeaders().set('Authorization',String(token));
      console.log("Got user information from server(userServicets)");
      return this.http.get(apiUrl,{headers});
}
}
