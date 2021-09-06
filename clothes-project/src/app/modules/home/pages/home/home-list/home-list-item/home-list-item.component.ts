import { Component, Input } from '@angular/core';
import { Laptop } from '../../models/laptop.model';
import { MobilePhone } from '../../models/phone.model';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeItemComponent {
  constructor() {}

  @Input() item: MobilePhone | Laptop;
  @Input() index: number;

  getTitle() {
    const isMobilePhone = this.item && this.item.type === 'PHONE';
    if (isMobilePhone) {
      return this.createPhoneTitle(this.item as MobilePhone);
    } else {
      return this.createLaptopTitle(this.item as Laptop);
    }
  }

  createPhoneTitle(phone: MobilePhone) {
    const manufacturer = phone.manufacturer;
    const model = phone.model;
    const sim = phone.specs.sim ? ', ' + phone.specs.sim : '';
    const memoryRAM = phone.specs.memoryRam[0];
    const network = phone.specs.mobileNetwork;
    return `${manufacturer} ${model}${sim}, ${memoryRAM}GB RAM, ${network}`;
  }

  createLaptopTitle(laptop: Laptop) {
    const manufacturer = laptop.manufacturer;
    const model = laptop.model;
    const processor = laptop.specs.processor;
    const inch = laptop.specs.inch;
    const memory = laptop.specs.memory;
    return `${manufacturer} ${model}, ${processor}, ${inch}, ${memory}`;
  }
}
