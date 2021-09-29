import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {

  constructor() { }
  addToCartButtonShouldChange: boolean = false;
  ngOnInit(): void {
  }

  onClick() {
    // this.cartService.getItem();
    // this.cartService.itemData
    //   .pipe(take(1))
    //   .subscribe((itemData) => (this.itemSelectedData = itemData));
    // this.store$.dispatch(
    //   new storeActions.AddItemToCart({ item: { ...this.itemSelectedData } })
    // );
  }

}
