import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector       : 'app-search-bar',
  templateUrl    : './search-bar.component.html',
  styleUrls      : ['./search-bar.component.less'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  inputValue: string;
  optionGroups: any[];
  
  onChange(value: any): void {
    console.log(value);
  }
  
  constructor() {
  }
  
  ngOnInit() {
  }
}
