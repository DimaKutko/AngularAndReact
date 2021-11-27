import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpMovieService } from 'src/app/services/http-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  myForm!: FormGroup;
  history: any[] = [];

  constructor(private __fb: FormBuilder, private _service: HttpMovieService) {}

  ngOnInit(): void {
    this.myForm = this.__fb.group({
      title: ['Avatar', Validators.required],
      year: [''],
    });
  }

  findMovie(form: FormGroup) {
    if (form.valid) {
      this._service
        .getMoive(form.value.title, form.value.year)
        .subscribe((data) => {
          console.log(data);
          this.history = [data, ...this.history];
        });
    } else {
      console.log('Form not valid');
    }
  }
}
