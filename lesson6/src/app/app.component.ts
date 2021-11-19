import { Component } from '@angular/core';
import Car from './car';
import Hobby from './hobby';
import { IStudent } from './student';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson6';
  message: string  = 'Hi ';

  counter: number = 0;

  types: string[] = ['number', 'string', 'boolean', 'any'];
  cars: Car[] = [
    new Car('https://cdn.motor1.com/images/mgl/jzw4g/s1/2022-bmw-i4.jpg', 'bmw', 2021),
    new Car('https://www.rides-mag.com/wp-content/uploads/sites/7/2011/03/audi-q7-feat.jpg', 'audi', 2021),
    new Car('https://cdn.motor1.com/images/mgl/Q1On0/s3/2021-citroen-c5-x.jpg', 'citroen', 2021),
  ];

  hobbys: Hobby[] = [
    new Hobby('cycling', 'cycling on the bike'),
    new Hobby('coding', 'coding on my mac'),
  ];

  students: IStudent[] = [];

  constructor(private trasportationService: TransportationService){
    this.students = trasportationService.students;
  }

  start(){
    const  message = this.message + this.title;

    return message;
  }

  doClick() : void{
    alert('You clicked');
  } 

  plus() : void{
    this.counter++;
  }
}
