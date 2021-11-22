import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  
  message: string = 'message';
  perccent: number = 0.2;
  exampleDate = '12.02.2000';
  list = ['123', '321', 'Dima', 'text'];

  constructor() { }
  
}
