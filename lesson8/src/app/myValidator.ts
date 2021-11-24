import { AbstractControl } from "@angular/forms";

export function validateLogin(control: AbstractControl){
    if(control.value.length < 5){
        return { myValidator: { message: 'КОРОТКО'}}
    }

    return null;
}