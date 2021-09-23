import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Laptop } from 'src/app/modules/home/pages/home/models/laptop.model';
import { MobilePhone } from 'src/app/modules/home/pages/home/models/phone.model';
import { CartItem } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() {}

  private initialData: CartItem = {
    colorSelected: null,
    item: null
  };
  itemData = new BehaviorSubject<CartItem>(null);

  collectedItemData: CartItem = { ...this.initialData };

  setItem(item: MobilePhone | Laptop) {
    this.collectedItemData = { ...this.collectedItemData, item: item };
  }

  setPhoneMemory(memorySelected: string) {
    this.collectedItemData = { ...this.collectedItemData, memorySelected };
  }

  setPhoneStorage(storageSelected: string) {
    this.collectedItemData = { ...this.collectedItemData, storageSelected };
  }

  setItemColor(colorSelected: string) {
    this.collectedItemData = { ...this.collectedItemData, colorSelected };
  }

  getItem(itemData = this.collectedItemData) {
    this.itemData.next(itemData);
  }

  removeItemCartData() {
    this.collectedItemData = { ...this.initialData };
  }
}
