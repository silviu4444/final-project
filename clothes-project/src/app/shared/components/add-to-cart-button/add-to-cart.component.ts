import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { CartItem } from '../../interfaces/interfaces';
import { CartService } from '../../services/cart.service';
import * as storeActions from '../../store/cart.actions';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  constructor(
    private store$: Store<AppState>,
    private cartService: CartService
  ) {}

  itemSelectedData: CartItem;

  onClick() {
    this.cartService.getItem();
    this.cartService.itemData
      .pipe(take(1))
      .subscribe((itemData) => (this.itemSelectedData = itemData));
    this.store$.dispatch(
      new storeActions.AddItemToCart({ item: { ...this.itemSelectedData } })
    );
    this.store$.select('cartStore').pipe(take(1)).subscribe((items) => {
      console.error(items)
    })
  }
}
