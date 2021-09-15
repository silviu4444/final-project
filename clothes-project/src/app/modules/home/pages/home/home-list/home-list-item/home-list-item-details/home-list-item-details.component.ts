import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { CustomSnackbarService } from 'src/app/shared/services/CustomSnackbar.service';
import { AppState } from 'src/app/store/app.reducer';
import { selectHomeError, selectItemDetails } from '../../../home.selectors';
import { HomeService } from '../../../home.service';
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
    private customSnackBar: CustomSnackbarService,
    private homeService: HomeService
  ) {}

  isAlive = true;
  item: Laptop | MobilePhone;
  itemColor: string;
  colorsAvailableIndex: number;
  title: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const id = queryParams.id;
      this.store$.dispatch(new HomeActions.GetItemDetails({ id }));
    });

    this.store$
      .select(selectItemDetails)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((item: MobilePhone | Laptop) => {
        if (item) {
          this.item = item;
          const colorsKeys = Object.keys(item.specs.colors);
          this.itemColor = colorsKeys[0];
          this.title = this.getTitle();
        }
      });

    this.store$
      .select(selectHomeError)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(
        (error: string) => error && this.customSnackBar.open(error, 'Close')
      );
  }

  getTitle(index: number = 0): string {
    const isMobilePhone = this.item && this.item.type === 'mobilePhones';
    if (isMobilePhone) {
      return this.homeService.createPhoneTitle(this.item as MobilePhone, index);
    } else {
      return this.homeService.createLaptopTitle(this.item as Laptop);
    }
  }

  onChangeColor = (color: string, index: number) => {
    this.colorsAvailableIndex = index;
    this.itemColor = color;
    this.title = this.getTitle(index);
  };

  ngOnDestroy() {
    this.isAlive = false;
    this.store$.dispatch(new HomeActions.DeleteItemDetails());
  }
}
