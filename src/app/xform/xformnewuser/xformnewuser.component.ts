import { Component, OnInit } from '@angular/core';

//@o ######### Import for Form
//@urir https://material.angular.io/components/input/examples

import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'xformnewuser',
  templateUrl: './xformnewuser.component.html',
  styleUrls: ['./xformnewuser.component.scss']
})
export class XformnewuserComponent implements OnInit {

  //-------------------------
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

  
//-----------------------

  constructor() { }

  ngOnInit() {
  }

}
