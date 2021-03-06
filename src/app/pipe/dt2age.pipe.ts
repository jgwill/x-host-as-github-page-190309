
import { Pipe, PipeTransform } from '@angular/core';

import {AgeCalculatorService} from "../services/age-calculator.service";

@Pipe({
 name: 'dt2age'
})

export class Dt2agePipe implements PipeTransform {
 
 ageService :AgeCalculatorService ;
 constructor(service: AgeCalculatorService) {
this.ageService = service;
   }
   
 transform(value: any, args?: any): any {
   let dt = new Date(value);
   let dtnow = Date.now();
   
   
   
   

   return  this.ageService.getAge(dt);//+ ageFromDate;
 }

}
