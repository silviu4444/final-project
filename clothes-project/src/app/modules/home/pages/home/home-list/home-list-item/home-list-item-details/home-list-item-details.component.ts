import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { CustomSnackbarService } from 'src/app/shared/services/CustomSnackbar.service';
import { AppState } from 'src/app/store/app.reducer';
import { selectHomeError, selectItemDetails } from '../../../home.selectors';
import { Laptop } from '../../../models/laptop.model';
import { MobilePhone } from '../../../models/phone.model';
import * as HomeActions from '../../../store/home.actions';

@Component({
  selector: 'app-home-list-item-details',
  templateUrl: './home-list-item-details.component.html',
  styleUrls: ['./home-list-item-details.component.scss']
})
export class HomeListItemDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppState>,
    private customSnackBar: CustomSnackbarService
  ) {}

  isAlive = true;
  item: Laptop | MobilePhone;

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const id = queryParams.id;
      this.store$.dispatch(new HomeActions.GetItemDetails({ id }));
    });

    this.store$
      .select(selectItemDetails)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((item: MobilePhone | Laptop) => item && (this.item = item));

    this.store$
      .select(selectHomeError)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(
        (error: string) => error && this.customSnackBar.open(error, 'Close')
      );
  }

  ngOnDestroy() {
    this.isAlive = false;
    this.store$.dispatch(new HomeActions.DeleteItemDetails());
  }
}
