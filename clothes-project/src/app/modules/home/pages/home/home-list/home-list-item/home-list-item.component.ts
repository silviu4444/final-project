import { Component, Input } from '@angular/core';
import { HomeService } from '../../home.service';
import { Laptop } from '../../models/laptop.model';
import { MobilePhone } from '../../models/phone.model';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeItemComponent {
  constructor(private homeService: HomeService) {}

  @Input() item: MobilePhone | Laptop;
  @Input() index: number;

  getTitle(): string {
    const isMobilePhone = this.item && this.item.type === 'PHONE';
    if (isMobilePhone) {
      return this.homeService.createPhoneTitle(this.item as MobilePhone);
    } else {
      return this.homeService.createLaptopTitle(this.item as Laptop);
    }
  }

  createPhoneTitle(phone: MobilePhone): string {
    const manufacturer = phone.manufacturer;
    const model = phone.model;
    const sim = phone.specs.sim ? ', ' + phone.specs.sim : '';
    const memoryRAM = phone.specs.memoryRam[0];
    const network = phone.specs.mobileNetwork;
    return `${manufacturer} ${model}${sim}, ${memoryRAM}GB RAM, ${network}`;
  }

  createLaptopTitle(laptop: Laptop): string {
    const manufacturer = laptop.manufacturer;
    const model = laptop.model;
    const processor = laptop.specs.processor;
    const inch = laptop.specs.inch;
    const memory = laptop.specs.memory;
    return `${manufacturer} ${model}, ${processor}, ${inch}, ${memory}`;
  }
}
