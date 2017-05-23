import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from './user/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  userSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = !this.user1Activated;
        } else if (id === 2) {
          this.user2Activated = !this.user2Activated;
        }
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
