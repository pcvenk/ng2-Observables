import {Component, OnDestroy, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;
  observableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });

    this.observableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
        },
      (error: string) => {
        console.log(error);
        },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
    this.observableSubscription.unsubscribe();
  }

}
