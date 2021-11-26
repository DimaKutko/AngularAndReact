import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpWeatherService } from 'src/app/sirvices/http-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myForm!: FormGroup;
  temperature!: number;

  constructor(private __fb: FormBuilder, private _service: HttpWeatherService) { }

  ngOnInit(): void {
    this.myForm = this.__fb.group({
      cityName: ['', Validators.required]
    });
  }

  saveForm(form:FormGroup){
    console.log('Valide: ', form.valid);

    if(form.valid){
    console.log('Get weather for', form.value.cityName);

      this._service.getWeather(form.value.cityName).subscribe(
        data => {
          console.log(data);

          this.temperature = data.main.temp - 273;
        }
      );
    }
  }
}
