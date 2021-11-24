import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _login!: string;
  private _password!: string;
  private _age!: number;
  
  constructor(private _loggerService: LoggerService) { }

  public get login(): string {    
    return this._login;
  }
  public get password(): string {    
    return this._password;
  }

  public get age(): number {    
    return this._age;
  }

  public set age(theAge: number){
    if(theAge <= 0 || theAge > 120){
      throw new Error('Its not correct age');
    }

    this._age = theAge;

    this._loggerService.ride(`${this._age}`);
  }

  public auth(login: string, password: string){
    if(login.length < 6){
      throw new Error('Login is short');
    }else if (password.length < 6){
      throw new Error('Password is short');
    }else{
      this._login = login;
      this._password = password;
    }
  }

  public check(login: string, password: string) : boolean {
    if(login == 'ADMIN' && password == '123456') return true;

    return false;
  }
}
