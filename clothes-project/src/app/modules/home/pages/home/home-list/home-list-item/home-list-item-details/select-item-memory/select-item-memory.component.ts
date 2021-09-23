import { Component, Input, OnInit } from '@angular/core';
import { PhoneMemory } from 'src/app/shared/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeService } from '../../../../home.service';
import { PhoneSpecs } from '../../../../models/phone.model';
@Component({
  selector: 'app-select-item-memory',
  templateUrl: './select-item-memory.component.html',
  styleUrls: ['./select-item-memory.component.scss']
})
export class SelectItemMemoryComponent implements OnInit {
  @Input() phoneItemSpecs: PhoneSpecs;

  constructor(
    private homeService: HomeService,
    private cartService: CartService
  ) {}
  phoneMemory: PhoneMemory;

  ngOnInit(): void {
    this.setPhoneMemory();
    this.setCartItemGBs();
    this.setCartItemStorage();
  }

  setPhoneMemory() {
    this.phoneMemory = {
      ram: {
        ramOptions: this.phoneItemSpecs.memoryRam,
        itemIdx: 0
      },
      storage: {
        storageOptions: this.phoneItemSpecs.memory,
        itemIdx: 0
      }
    };
  }

  setCartItemGBs() {
    const defaultMemory = this.phoneMemory.ram.ramOptions[0];
    this.cartService.setPhoneMemory(defaultMemory);
  }

  setCartItemStorage() {
    const defaultStorage = this.phoneMemory.storage.storageOptions[0];
    this.cartService.setPhoneStorage(defaultStorage);
  }

  onChangeRAM = (index: number) => {
    this.phoneMemory.ram.itemIdx = index;
    const GBSelected = this.phoneMemory.ram.ramOptions[index];
    this.homeService.updateGBsOnTitle(GBSelected);
    this.cartService.setPhoneMemory(GBSelected);
  };

  onChangeStorage(index: number) {
    this.phoneMemory.storage.itemIdx = index;
    const selectedMemoryRAM = this.phoneMemory.storage.storageOptions[index];
    this.cartService.setPhoneStorage(selectedMemoryRAM);
  }
}
