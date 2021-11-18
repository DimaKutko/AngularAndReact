import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{first}}</h1>  
  <div>  
    <ul>
      <li *ngFor="let str of second">
        {{str}}
      </li>
    </ul>
  </div>`
})
export class AppComponent {
  first: string = 'Patience is a key element of success';
  second: string[] = [
    'If you think your teacher is tough, wait till you get a boss',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
    'Benicetonerds.Chancesareyou’llendupworkingforone',
  ];
}
