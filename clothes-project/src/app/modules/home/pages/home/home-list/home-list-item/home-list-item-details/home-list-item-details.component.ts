import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { selectItemDetails } from '../../../home.selectors';
import { Laptop } from '../../../models/laptop.model';
import { MobilePhone } from '../../../models/phone.model';
import * as HomeActions from '../../../store/home.actions';

@Component({
  selector: 'app-home-list-item-details',
  templateUrl: './home-list-item-details.component.html',
  styleUrls: ['./home-list-item-details.component.scss']
})
export class HomeListItemDetailsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private store$: Store<AppState>) {}

  subscription$: Subscription;

  isAlive = true;
  item: Laptop | MobilePhone;

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const id = queryParams.id;
      this.store$.dispatch(new HomeActions.GetItemDetails({ id }));
    });

    this.subscription$ = this.store$
      .select(selectItemDetails)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((data: MobilePhone | Laptop) => {
        data && (this.item = data);
        console.log(this.item)
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
    this.store$.dispatch(new HomeActions.DeleteItemDetails());
  }
}
