import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.less']
})
export class ContentBlockComponent implements OnInit {

  tabs = [{
    active: true,
    name: '最新更新'
  }, {
    active: true,
    name: '最多收藏'
  }, {
    active: true,
    name: '人气排行'
  }];

  items = [{
    title: ''
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
