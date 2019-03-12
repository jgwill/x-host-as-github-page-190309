import { Component, OnInit } from '@angular/core';

//@o ######### Import for Form
//@urir https://material.angular.io/components/input/examples
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
 import {ErrorStateMatcher} from '@angular/material/core';

//@v Error when invalid control is dirty, touched, or submitted. 
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'xformnewuser',
  templateUrl: './xformnewuser.component.html',
  styleUrls: ['./xformnewuser.component.scss']
})
export class XformnewuserComponent implements OnInit {

  //-------------------------
  //@v email form control

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  matcher = new MyErrorStateMatcher();
//-----------------------

  constructor() { }

  ngOnInit() {
  }

}
