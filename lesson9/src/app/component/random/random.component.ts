import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRandomService } from 'src/app/sirvices/http-random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  myForm!: FormGroup;
  data: number[] = [];

  constructor(private __fb: FormBuilder, private _service: HttpRandomService) { }

  ngOnInit(): void {
    this.myForm = this.__fb.group({
      min: ['1', Validators.required],
      max: ['10', Validators.required],
      count: ['5', Validators.required],
    });
  }

  getRandom(form:FormGroup){
    console.log('Valide: ', form.valid);

    if(form.valid){
      console.log(form.value);
    }

    const value = form.value;
    this._service.getRandom(value.min, value.max, value.count).subscribe(
      data => {
        console.log(data);

        this.data = data.result.random.data;
      }
    );    
  }

}
