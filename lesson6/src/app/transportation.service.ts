import { Injectable } from '@angular/core';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

  student1: IStudent = {
    name: 'Ivan',
    surname: 'Ivanov',
    avarage: 8.3,
    group: 'OSO61',
  }
  student2: IStudent = {
    name: 'Pety',
    surname: 'Petrov',
    avarage: 8.1,
    group: 'OSO61',
  }
  student3: IStudent = {
    name: 'Sveta',
    surname: 'Svetova',
    avarage: 8.3,
    group: 'OSO61',
  }

  private _students: IStudent[] = [
    this.student1,
    this.student2,
    this.student3,
  ];

  constructor() { }

  get students() :IStudent[] {
    return this._students;
  }
}
