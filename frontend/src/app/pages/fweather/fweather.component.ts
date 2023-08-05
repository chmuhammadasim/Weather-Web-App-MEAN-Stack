import { Component,OnInit } from '@angular/core';
import { initTE,Input,Sidenav,Ripple,Button,Tab, Dropdown, Collapse,} from 'tw-elements';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/sdk/services/weatherservice/weather.service';

@Component({
  selector: 'app-fweather',
  templateUrl: './fweather.component.html',
  styleUrls: ['./fweather.component.css']
})
export class FweatherComponent implements OnInit{
  favWeatherForm !: FormGroup;
  fnameOfCity:string[]=[];
  ftempF:string[]=[];
  ftempC:string[]=[];
  ficon:string[]=[];
  ftext:string[]=[];
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private weatherService:WeatherService,
  ){}
  ngOnInit(){
  initTE({Button,Ripple,Tab, Dropdown, Collapse,});
  this.formInitializer();
  }
  formInitializer() {

    this.favWeatherForm = this.formBuilder.group({
      fcity: [''],
    });
    this.getFavCity();
  }
  async setFavCity(){
    try {
      const fcity = this.favWeatherForm.value.fcity;
      console.log("city",fcity);
      
        if(fcity != null){
          console.log("city2",fcity);
          const observable= await this.weatherService.setFavCity(fcity);
          observable.subscribe();
          location.reload();
        }
    } catch (error) {
      this.router.navigate(['Error']);
      console.log("error",error);
    }
  }
  async getFavCity(){
    try {
      console.log("getFavCity");
      
        const observable= await this.weatherService.getFavCity();
        observable
        .subscribe( 
          ( data: any )=>{
            for (let i = 0; i < data.data.length; i++) {
              console.log(i);
              console.log(data.data[i].location.name);
              console.log(data.data[i].current.temp_c);
              this.fnameOfCity.push(data.data[i].location.name);
              this.ftempC.push(data.data[i].current.temp_c);
              this.ftempF.push(data.data[i].current.temp_f);
              this.ficon.push(data.data[i].current.condition.icon);
              this.ftext.push(data.data[i].current.condition.text);
            }
          }
        );
    } catch (error) {
      this.router.navigate(['Error']);
      console.log("error",error);
    }
  }
  async onSelectCity(city: string){
    try {
      console.log("city",city);
          const observable= await this.weatherService.deleteFavCity(city);
          observable.subscribe((data: any)=>
          console.log("delete",data),
          location.reload(),
          );
  
    } catch (error) {
      this.router.navigate(['Error']);
      console.log("error",error);
    }
  }
}
