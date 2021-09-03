import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { MobilePhone } from '../models/phone.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit, OnDestroy {
  constructor(private store$: Store<AppState>) {}

  mobilePhones: MobilePhone[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.store$
      .select('homeStore')
      .subscribe((homeState) => {
        const phones = homeState.homeProducts.mobilePhones;
        this.mobilePhones = phones;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
