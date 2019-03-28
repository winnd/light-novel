import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.less']
})
export class ContentBlockComponent implements OnInit {

  tabs = [{
    active: true,
    name: 'Tab1',
    icon: 'applle'
  }, {
    active: true,
    name: 'Tab2',
    icon: 'apple'
  }];

  items =[{
    title:''
  }]

  constructor() {
  }

  ngOnInit() {
  }

}
