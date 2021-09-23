import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, takeWhile } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart.service';
import { CustomSnackbarService } from 'src/app/shared/services/CustomSnackbar.service';
import { AppState } from 'src/app/store/app.reducer';
import { selectedItem, selectHomeError } from '../../../home.selectors';
import { HomeService } from '../../../home.service';
import { Laptop } from '../../../models/laptop.model';
import { MobilePhone, PhoneSpecs } from '../../../models/phone.model';
import * as HomeActions from '../../../store/home.actions';
import { HomeState } from '../../../store/home.reducer';

@Component({
  selector: 'app-home-list-item-details',
  templateUrl: './home-list-item-details.component.html',
  styleUrls: ['./home-list-item-details.component.scss']
})
export class HomeListItemDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppState>,
    private customSnackBar: CustomSnackbarService,
    private homeService: HomeService,
    private cartService: CartService
  ) {}

  title: string;
  isAlive = true;
  item: Laptop | MobilePhone;
  itemColor: string;
  colorsAvailableIndex: number = 0;
  phoneSpecs: PhoneSpecs;

  ngOnInit(): void {
    this.fetchItem();
    this.selectItem();
    this.selectHomeError();
    this.setComponentTitle();
  }

  fetchItem() {
    let id: string;
    this.route.queryParams.subscribe((queryParams) => {
      id = queryParams.id;
    });
    this.store$
      .select('homeStore')
      .pipe(take(2))
      .subscribe((homeState: HomeState) => {
        const homeStateHasItems = homeState.homeProducts.laptops.length > 0;
        if (homeStateHasItems) {
          this.store$.dispatch(new HomeActions.FetchItemDetailsStart({ id }));
        }
      });
  }

  selectItem() {
    this.store$
      .select(selectedItem)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((item) => {
        if (item) {
          this.item = item;
          this.item.type === 'mobilePhones' &&
            (this.phoneSpecs = this.item.specs as PhoneSpecs);
          const colorsKeys = Object.keys(item.specs.colors);
          this.itemColor = colorsKeys[0];
          this.homeService.getTitle(this.item);
          this.cartService.setItemColor(colorsKeys[0]);
          this.cartService.setItemId(item.id);
        }
      });
  }

  selectHomeError() {
    this.store$
      .select(selectHomeError)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(
        (error: string) => error && this.customSnackBar.open(error, 'Close')
      );
  }

  setComponentTitle() {
    this.homeService.itemTitle
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((title: string) => (this.title = title));
  }

  onChangeColor = (color: string, index: number) => {
    this.colorsAvailableIndex = index;
    this.itemColor = color;
    this.item.type === 'mobilePhones' &&
      this.homeService.updateColorOnTitle(color, this.title);
    this.cartService.setItemColor(color);
  };

  ngOnDestroy() {
    this.isAlive = false;
    this.store$.dispatch(new HomeActions.DeleteItemDetails());
    this.cartService.removeItemCartData();
  }
}
