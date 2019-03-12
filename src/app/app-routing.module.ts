import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XroutingdummyComponent} from './xrouting/xroutingdummy/xroutingdummy.component';

const routes: Routes = [
  { path: 'dummy', component: XroutingdummyComponent,
outlet: 'popup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
