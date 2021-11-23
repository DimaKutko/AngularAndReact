import { Component } from '@angular/core';
import { IMachine } from './IMachine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  percent: number = 0.8;
  price: number = 0.50;
  numbers: number[] = [100,101,102,103,104,105];
  count: number = 0;
  machine?: IMachine;

  plus(){
    this.count++;
  }

  car(){
    this.machine = {
      name: 'БелАЗ 75710',
      url_photo: 'https://100.ks.ua/images/uploaded/5a8d847ec1df954d0080eb82ae66d8f5.jpg'
    }
  }

  plane(){
    this.machine = {
      name: 'Ан-255',
      url_photo: 'https://seanews.ru/wp-content/uploads/2020/04/an-225-mrio.jpg'
    }
  }

  ship(){
    this.machine = {
      name: 'Knock Nevis',
      url_photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Knock_Nevis.jpg/300px-Knock_Nevis.jpg',
    }
  }
}
