import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvv',
  templateUrl: './cvv.component.html',
  styleUrls: ['./cvv.component.css']
})
export class CvvComponent {

  constructor() {

  }

   myCvv = {
    name: "Dima",
    surname: "Kut'ko",
    city: "Odessa",
    email: "exampleemail@gmail.com",
    phoneNumber:"+380110223456",
    photo_url: "https://media-exp1.licdn.com/dms/image/C4D03AQH5XiAHPdHgMA/profile-displayphoto-shrink_800_800/0/1634047672422?e=1643241600&v=beta&t=KH43LIW222AqSwkQu505MOzkbnjjWlEh8YegiWs1z3c",
    experience: "1,5 years",
    lang: ['dart', 'c++', 'c#', 'JS']
  };
}
