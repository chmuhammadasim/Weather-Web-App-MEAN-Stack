import { Component,OnInit } from '@angular/core';
import { initTE,Input,Sidenav,Ripple,Button,Tab, Dropdown, Collapse,} from 'tw-elements';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/sdk/services/weatherservice/weather.service';

@Component({
  selector: 'app-tweather',
  templateUrl: './tweather.component.html',
  styleUrls: ['./tweather.component.css']
})
export class TweatherComponent implements OnInit{
  weatherForm !: FormGroup;
  favWeatherForm !: FormGroup;
  nameOfCity!:string;
  tempF!:string;
  tempC!:string;
  icon!:string;
  text!:string;
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
    this.weatherForm = this.formBuilder.group({
      city: [null, [Validators.required]],
    });
  }
  async getWeather(){
    try {
      const city = this.weatherForm.value.city;
        const observable= await this.weatherService.getWeatherByCity(city);
        observable
        .subscribe( (data: { data: { location: { name: string; }; current: { temp_c: string; temp_f: string; condition: { icon: string; text: string; }; }; }; }) => {
            this.nameOfCity=data.data.location.name;
            this.tempC=data.data.current.temp_c;
            this.tempF=data.data.current.temp_f;
            this.icon=data.data.current.condition.icon;
            this.text=data.data.current.condition.text;
            console.log("Got Response from server(tweatherComponentts)");
        });
    } catch (error) {
      console.log("Error while Getting Response from server(tweatherComponentts)");
      console.log("error",error);
      this.router.navigate(['Error']);
    }
  }
}
