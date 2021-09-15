import { Injectable } from '@angular/core';
import { Laptop } from './models/laptop.model';
import { MobilePhone } from './models/phone.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  createPhoneTitle(phone: MobilePhone, colorIndex: number = 0) {
    const colorKeys = Object.keys(phone.specs.colors);
    const color = colorKeys[colorIndex];
    const manufacturer = phone.manufacturer;
    const model = phone.model;
    const sim = phone.specs.sim ? ', ' + phone.specs.sim : '';
    const memoryRAM = phone.specs.memoryRam[0];
    const network = phone.specs.mobileNetwork;
    return `${manufacturer} ${model}${sim}, ${memoryRAM}GB RAM, ${network}, ${color}`;
  }

  createLaptopTitle(laptop: Laptop) {
    const manufacturer = laptop.manufacturer;
    const model = laptop.model;
    const processor = laptop.specs.processor;
    const inch = laptop.specs.inch;
    const memory = laptop.specs.memory;
    return `${manufacturer} ${model}, ${processor}, ${inch}", ${memory}`;
  }
}
