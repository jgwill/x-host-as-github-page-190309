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


import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    XgridsysComponent,
    XmylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatGridListModule,MatIconModule,MatListModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
