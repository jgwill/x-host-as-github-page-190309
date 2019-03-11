import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XgridsysComponent } from './x/xgridsys/xgridsys.component';
import { XmylistComponent } from './x/xmylist/xmylist.component';

import { XmdiconlistComponent } from './x/xmdiconlist/xmdiconlist.component';
import { XanimripplingComponent } from './xanim/xanimrippling/xanimrippling.component';


import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core'; 

import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    XgridsysComponent,
    XmylistComponent,
    XmdiconlistComponent,
    XanimripplingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,MatIconModule,MatListModule,MatTableModule,MatRippleModule,MatCheckboxModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
