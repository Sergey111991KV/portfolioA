import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  stream$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.error('error rxjs')
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 3000);
  });

  constructor() { }

  ngOnInit(): void {
    console.log('hi')
    this.stream$.subscribe((someData) => {
      console.log('subscribe', someData)
    })
  }

}
