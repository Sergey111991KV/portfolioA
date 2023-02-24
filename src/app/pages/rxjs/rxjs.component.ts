import { Component, OnInit } from '@angular/core';
import {Observable, from} from "rxjs";
import {ObservableMessage} from "./interface";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit {

  public messagesObservable: ObservableMessage[] = []

  stream$ = new Observable<ObservableMessage>(subscriber => {
    setTimeout(() => {
      subscriber.next({type: 'next', value: '1'});
    }, 1000);
    setTimeout(() => {
      subscriber.next({type: 'next', value: '2'});
    }, 2000);
    setTimeout(() => {
      subscriber.error({type: 'error', value: 'error'})
    }, 2500);
    // After error will not come
    setTimeout(() => {
      subscriber.next({type: 'next', value: '3'});
    }, 3000);
    setTimeout(() => {
      subscriber.complete();
    }, 4500);
    // Is not delivered because it would violate the contract
    setTimeout(() => {
      subscriber.next({type: 'next', value: '4'});
    }, 5000);
  });

  streamFrom$ = from([10, 20, 30]);
  subscriptionFrom = this.streamFrom$.subscribe((x) => console.log(x));

  constructor() { }

  ngOnInit(): void {
    console.log('hi')
    this.stream$.subscribe({
      next: (data) => {
        console.log(data)
        this.messagesObservable.push(data)
      },
      error: (data) => {
        this.messagesObservable.push(data)
      },
    })
  }

}
