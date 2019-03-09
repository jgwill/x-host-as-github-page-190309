import { Component, OnInit } from '@angular/core';

export interface Resource {
  title: string;
  url: string;
  
  note?: string;
}
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-xmylist',
  templateUrl: './xmylist.component.html',
  styleUrls: ['./xmylist.component.scss']
})
export class XmylistComponent implements OnInit {


  displayedColumns: string[] = ['title', 'note'];

  resources: Resource[] = [
    { title: "Material ANgular List", 
    url: "https://material.angular.io/components/list/overview" ,
    note :"<mat-list> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own."

  }
  ];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];


  constructor() { }

  ngOnInit() {
  }
}
