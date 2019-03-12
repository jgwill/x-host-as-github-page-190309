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

  formTitle = "New Patient";
  birthLabel = "Birth Date: ";

  genders = ['Homme','Femme','Autre'];

  model = new Patientuser("oehuntsoehu897oeu","mh3tn45htn34h5tn43","Guillaume","Isabelle","1976-05-13",this.genders[0],"jgi@guillaume.com");


  submitted = false;


  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  //-------------------------

  //-----------------------

  constructor() { }

  ngOnInit() {
  }

}
