import { Injectable } from '@angular/core';
import { WeatherConfig } from '../../weather.config';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private authService:AuthService
  ){}
  async getWeatherByCity(city: string): Promise<any> {
    try {
      console.log("Getting Weather From Server...(WeatherServicets)");
      const apiUrl = WeatherConfig.getPath()+`/weather/?${city}`;
      const token= await this.authService.getTokenFromStorage();
      var headers = new HttpHeaders().set('Authorization',String(token))
      console.log("Got Weather From Server successfully(WeatherServicets)");
      return this.http.post(apiUrl,{},{headers});
    } catch (error) {
      console.log("Errore While Getting Weather From Server(WeatherServicets)");
      console.log("Error: ", error); 
    }
  }
  
  async setFavCity(city: string): Promise<any> {
    try {
      console.log("Sending city name to Server...(WeatherServicets)");
      const apiUrl = WeatherConfig.getPath()+`/weather/fav/?${city}`;
      const token= await this.authService.getTokenFromStorage();
      var headers = new HttpHeaders().set('Authorization',String(token))
      console.log("Sended city name to Server successfully(WeatherServicets)");
      return this.http.put(apiUrl,{},{headers});
    } catch (error) {
      console.log("Error While Sending city name to Server(WeatherServicets)");
      console.log("Error:",error);
    }
  }
  async getFavCity(): Promise<any> {
    try {
      console.log("Getting weather information from Server...(WeatherServicets)");
      const apiUrl = WeatherConfig.getPath()+`/weather/fav/`;
      const token= await this.authService.getTokenFromStorage();
      var headers = new HttpHeaders().set('Authorization',String(token))
      console.log("Got weather information from Server(WeatherServicets)");
      return this.http.get(apiUrl,{headers});
    } catch (error) {
      console.log("Error While Getting weather information from Server(WeatherServicets)");
      console.log(error);
    }
  }
  async deleteFavCity(city: string): Promise<any> {
    try {
      console.log("Deleting City Name from Server...(WeatherServicets)");
      const apiUrl = WeatherConfig.getPath()+`/weather/fav/?${city}`;
      const token= await this.authService.getTokenFromStorage();
      var headers = new HttpHeaders().set('Authorization',String(token))
      console.log("Deleted City Name from Server(WeatherServicets)");
      return this.http.delete(apiUrl,{headers});
    } catch (error) {
      console.log("Error While Deleting City Name from Server(WeatherServicets)");
      console.log("Error",error);
    }
  }
}
