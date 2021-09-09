import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../home.service';
import { Laptop } from '../../models/laptop.model';
import { MobilePhone } from '../../models/phone.model';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeItemComponent {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() item: MobilePhone | Laptop;
  @Input() index: number;

  getTitle(): string {
    const isMobilePhone = this.item && this.item.type === 'mobilePhones';
    if (isMobilePhone) {
      return this.homeService.createPhoneTitle(this.item as MobilePhone);
    } else {
      return this.homeService.createLaptopTitle(this.item as Laptop);
    }
  }

  showDetails() {
    this.router.navigate(['item/'], {
      relativeTo: this.route,
      queryParams: { id: this.item.id }
    });
  }
}
