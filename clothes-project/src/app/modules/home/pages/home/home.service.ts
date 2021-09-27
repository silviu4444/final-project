import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createLaptopTitle, createPhoneTitle } from 'src/app/shared/utility-functions/home-utility-functions';
import { Laptop } from './models/laptop.model';
import { MobilePhone } from './models/phone.model';

@Injectable({ providedIn: 'root' })
export class HomeService {

  itemTitle = new BehaviorSubject<string>(null);

  getTitle(item: Laptop | MobilePhone) {
    const isMobilePhone = item && item.type === 'mobilePhones';
    if (isMobilePhone) {
      this.getPhoneTitle(item as MobilePhone);
    } else {
      this.getLaptopTitle(item as Laptop);
    }
  }

  getPhoneTitle(phone: MobilePhone) {
    const title = createPhoneTitle(phone);
    this.itemTitle.next(title);
  }

  getLaptopTitle(laptop: Laptop) {
    const title = createLaptopTitle(laptop);
    this.itemTitle.next(title);
  }
}
