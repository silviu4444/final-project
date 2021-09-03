import { Component, Input } from '@angular/core';
import { MobilePhone } from '../../models/phone.model';

@Component({
  selector: 'app-home-phone-item',
  templateUrl: './home-phone-item.component.html',
  styleUrls: ['./home-phone-item.component.scss']
})
export class HomePhoneItemComponent {
  constructor() {}

  @Input() phone: MobilePhone;
  @Input() index: number;

  getPhoneTitle() {
    const manufacturer = this.phone.manufacturer;
    const model = this.phone.model;
    const sim = this.phone.specs.sim ? ", " + this.phone.specs.sim : '';
    const memoryRAM = this.phone.specs.memoryRam[0];
    const network = this.phone.specs.mobileNetwork;
    return `${manufacturer} ${model}${sim}, ${memoryRAM}GB RAM, ${network}`;
  }
}
