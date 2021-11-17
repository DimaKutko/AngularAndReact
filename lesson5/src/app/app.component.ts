import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1> <div>{{message}}</div> '
})
export class AppComponent {
  name: string = 'Angular prohect';
  message: string = 'To be or not to be';
}
