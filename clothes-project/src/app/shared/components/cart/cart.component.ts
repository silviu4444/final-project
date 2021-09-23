import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, takeWhile } from 'rxjs/operators';
import { homeProducts } from 'src/app/modules/home/pages/home/home.selectors';
import { SelectCartItems } from '../../selectors/cart.selectors';
import { CartItemWithQuantity } from '../../store/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private store$: Store) {}

  carItems: CartItemWithQuantity[] = null;
  homeProducts = null;

  isAlive = true;

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.store$
      .select(SelectCartItems)
      .pipe(take(1))
      .subscribe((items) => {
        if (items.length > 0) {
          this.carItems = items;
          this.selectHomePorducts();
        }
      });
  }

  selectHomePorducts() {
    this.store$
      .select(homeProducts)
      .pipe(take(1))
      .subscribe((homeProducts) => (this.homeProducts = homeProducts));
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
