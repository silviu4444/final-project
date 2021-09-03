import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from '../../models/laptop.model';

@Component({
  selector: 'app-home-laptop-item',
  templateUrl: './home-laptop-item.component.html',
  styleUrls: ['./home-laptop-item.component.scss']
})
export class HomeLaptopItemComponent {

  @Input() laptop: Laptop;
  @Input() index: number;

    getPhoneTitle() {
    const manufacturer = this.laptop.manufacturer;
    const model = this.laptop.model;
    const processor = this.laptop.specs.processor;
    const inch = this.laptop.specs.inch;
    const memory = this.laptop.specs.memory
    return `${manufacturer} ${model}, ${processor}, ${inch}, ${memory}`;
  }
}
