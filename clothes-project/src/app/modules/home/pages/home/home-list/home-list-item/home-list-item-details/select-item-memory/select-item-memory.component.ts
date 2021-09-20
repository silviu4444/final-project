import { Component, Input, OnInit } from '@angular/core';
import { PhoneMemory } from 'src/app/shared/home-interfaces/interfaces';
import { HomeService } from '../../../../home.service';
import { PhoneSpecs } from '../../../../models/phone.model';
@Component({
  selector: 'app-select-item-memory',
  templateUrl: './select-item-memory.component.html',
  styleUrls: ['./select-item-memory.component.scss']
})
export class SelectItemMemoryComponent implements OnInit {
  @Input() phoneItemSpecs: PhoneSpecs;

  constructor(private homeService: HomeService) {}
  phoneMemory: PhoneMemory;

  ngOnInit(): void {
    this.setPhoneMemory();
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

  onChangeRAM = (index: number) => {
    this.phoneMemory.ram.itemIdx = index;
    const GBSelected = this.phoneMemory.ram.ramOptions[index];
    this.homeService.updateGBsOnTitle(GBSelected);
  };

  onChangeStorage(index: number) {
    this.phoneMemory.storage.itemIdx = index;
  }
}
