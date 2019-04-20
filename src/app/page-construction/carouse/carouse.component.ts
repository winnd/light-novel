import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouse',
  templateUrl: './carouse.component.html',
  styleUrls: ['./carouse.component.less']
})
export class CarouseComponent implements OnInit {

  array = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
