import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tbody',
  templateUrl: './tbody.component.html',
  styleUrls: ['./tbody.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-tbody',
  },
})
export class TbodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
