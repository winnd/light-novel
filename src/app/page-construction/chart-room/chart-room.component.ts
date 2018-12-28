import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-room',
  templateUrl: './chart-room.component.html',
  styleUrls: ['./chart-room.component.less']
})
export class ChartRoomComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Array.from(document.getElementsByTagName('*')).map(x => {
    //   x.style.background = '#' + Math.floor(Math.random() * 10e6).toString(16);
    // });
  }

}
