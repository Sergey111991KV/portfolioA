import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-kit-table',
  templateUrl: './ui-kit-table.component.html',
  styleUrls: ['./ui-kit-table.component.scss'],
  host: {
    class: 'app-table',
  },
})
export class UiKitTableComponent implements OnInit {
  // modes: string;
  constructor() { }

  ngOnInit(): void {
  }

  // /** Table mode setter */
  // public set mode(value: CnvTableMode) {
  //   this.modes = value;
  // }

  /** Table mode getter */
  // public get mode(): CnvTableMode {
  //   return this.modes;
  // }

  // @HostBinding('class') public classes = '';


  // private applyClasses(): void {
  //   this.classes = `
  //       cnv-table_mode_${this.mode}
  //       ${this.border ? 'cnv-table_border' : ''}
  //     `;
  // }

}
