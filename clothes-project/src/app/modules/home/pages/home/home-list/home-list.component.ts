import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { HomeProducts } from '../store/home.reducer';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit, OnDestroy {
  constructor(private store$: Store<AppState>) {}

  homeList: HomeProducts = ({
    mobilePhones: [],
    laptops: []
  } = { mobilePhones: [], laptops: [] });
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.store$
      .select('homeStore')
      .subscribe((homeState) => {
        this.homeList = homeState.homeProducts;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
