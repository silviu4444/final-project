import { Component, Input, OnInit } from '@angular/core';
import { PhoneMemory } from 'src/app/shared/home-interfaces/interfaces';
import { PhoneSpecs } from '../../../../models/phone.model';
@Component({
  selector: 'app-select-item-memory',
  templateUrl: './select-item-memory.component.html',
  styleUrls: ['./select-item-memory.component.scss']
})
export class SelectItemMemoryComponent implements OnInit {
  @Input() phoneItemSpecs: PhoneSpecs;

  constructor() {}
  phoneMemory: PhoneMemory;

  ngOnInit(): void {
    this.setPhoneMemory();
  }

  setPhoneMemory() {
    this.phoneMemory = {
      ram: {
        ramOptions: this.phoneItemSpecs.memoryRam,
        itemIdx: null
      },
      storage: {
        storageOptions: this.phoneItemSpecs.memory,
        itemIdx: null
      }
    };
  }

  onChangeRAM = (index: number) => {
    this.phoneMemory.ram.itemIdx = index;
  };

  onChangeStorage(index: number) {
    this.phoneMemory.storage.itemIdx = index;
  }
}
