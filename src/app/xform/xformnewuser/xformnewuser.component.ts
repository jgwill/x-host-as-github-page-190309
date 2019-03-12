import { Component, OnInit } from '@angular/core';

import { Patientuser } from "../../entities/patientuser";

//@o ######### Import for Form
//@urir https://material.angular.io/components/input/examples




@Component({
  selector: 'xformnewuser',
  templateUrl: './xformnewuser.component.html',
  styleUrls: ['./xformnewuser.component.scss']
})
export class XformnewuserComponent implements OnInit {

  patient: Patientuser;

  //-------------------------

  //-----------------------

  constructor() { }

  ngOnInit() {
  }

}
