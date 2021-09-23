import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() {}

  private initialData: CartItem = {
    id: null,
    colorSelected: null
  };
  itemData = new BehaviorSubject<CartItem>(null);

  collectedItemData: CartItem = { ...this.initialData };

  setItemId(id: number) {
    this.collectedItemData = { ...this.collectedItemData, id };
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
