import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { validateLogin } from 'src/app/myValidator';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  inputAge!: number; 
  inputLogin!: string; 
  inputPassword!: string; 
  message!: string;
  nameControl!: FormControl;

  loginForm: any = {
    login: '',
    password: ''
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.nameControl = new FormControl('Alex', [validateLogin] );
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.nameControl.statusChanges.subscribe((value) => {
      console.log(value)
      console.log(this.nameControl.errors)
    });
  }

  setAge(){
    this._userService.age = this.inputAge;
  }

  auth(){
    this._userService.auth(this.inputLogin, this.inputPassword);

    console.log(`login: ${this._userService.login}
    password: ${this._userService.password}`);
  }

  printForm(){
    console.log(this.loginForm);
  
     if(this._userService.check(this.loginForm.login, this.loginForm.password)){
      this.message = 'authed';
     }else{
      this.message = 'not authed';
     }
  }

}
