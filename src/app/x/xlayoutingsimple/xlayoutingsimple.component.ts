import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xlayoutingsimple',
  templateUrl: './xlayoutingsimple.component.html',
  styleUrls: ['./xlayoutingsimple.component.scss']
})
export class XlayoutingsimpleComponent implements OnInit {


  stc = {
    goal: "Mastery Responsiveness with Angular/Layout/Flex",
    path: "src/app/x/xlayoutingsimple/xlayoutingsimple.component.html",
    state: "completed",
    content:"The layout Stack itself when small device."
  };
  constructor() { }

  ngOnInit() {
  }

}
