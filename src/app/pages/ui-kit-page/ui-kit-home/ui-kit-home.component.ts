import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-kit-home',
  templateUrl: './ui-kit-home.component.html',
  styleUrls: ['./ui-kit-home.component.css']
})
export class UiKitHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public routes: string[] = [
    'cnv-table',
    'cnv-form',
    'tui-slider'
  ];

}
