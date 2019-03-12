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
import { GixiconTableComponent } from './gixicons/gixicon-table/gixicon-table.component';
import { GixiconsILoveComponent } from './gixicons/gixicons-ilove/gixicons-ilove.component';
import { XtabsComponent } from './x/xtabs/xtabs.component';


import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu'; 


import { GixendofComponent } from './xutil/gixendof/gixendof.component';
import { XresourcesComponent } from './xutil/xresources/xresources.component';
import { XmenusideComponent } from './xmenu/xmenuside/xmenuside.component';

@NgModule({
  declarations: [
    AppComponent,
    XgridsysComponent,
    XmylistComponent,
    XmdiconlistComponent,
    XanimripplingComponent,
    GixiconTableComponent,
    GixiconsILoveComponent,
    XtabsComponent,
    GixendofComponent,
    XresourcesComponent,
    XmenusideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule, MatIconModule, MatListModule, MatTableModule, MatRippleModule, MatCheckboxModule, MatFormFieldModule, MatTabsModule, MatSidenavModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
