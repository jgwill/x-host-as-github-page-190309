import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xflexlayout',
  templateUrl: './xflexlayout.component.html',
  styleUrls: ['./xflexlayout.component.scss']
})
export class XflexlayoutComponent implements OnInit {

  stc = {
    goal: "Mastery Responsiveness with Angular/Layout/Flex",
    path: "src/app/x/xflexlayout/xflexlayout.component.html",
    state: "completed",
    content:"The layout Stack itself when small device."
  };

  constructor() { }

  ngOnInit() {
  }

}
