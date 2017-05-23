import {Component, OnDestroy, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
  }

}
