import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentTime: string | undefined;
	 	 constructor() {
	    setInterval(
	      () => {
	        this.currentTime = new Date().toLocaleTimeString();
	      }, 1000
	    )    
	  }

  title: string = `app`;
  name: string = 'Dima';


  start(){
    return 'Start';
  }

  click() {
        this.title = 'Button clicked';
  }    
}



