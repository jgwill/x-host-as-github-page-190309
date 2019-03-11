import { Component, OnInit } from '@angular/core';

import {Resource} from '../../resource';
import {MockResources} from '../../mockresources';

@Component({
  selector: 'app-xresources',
  templateUrl: './xresources.component.html',
  styleUrls: ['./xresources.component.scss']
})
export class XresourcesComponent implements OnInit {

  mocks: MockResources;
  
  constructor() { }

  ngOnInit() {
  }

}
