import { Component, Input, OnChanges, OnInit } from '@angular/core';

interface ColorSelected {
  colorName: string;
  imgURL: string;
  index: number;
}

@Component({
  selector: 'app-item-presentation',
  templateUrl: './item-presentation.component.html',
  styleUrls: ['./item-presentation.component.scss']
})
export class ItemPresentationComponent implements OnInit, OnChanges {
  @Input() images: { [key: string]: string[] };
  @Input() color: string;
  colorSelected: ColorSelected = {
    colorName: null,
    imgURL: null,
    index: null
  };

  changeImage(index: number = 0) {
    this.colorSelected.imgURL = this.images[this.color][index];
    this.colorSelected.colorName = this.color;
    this.colorSelected.index = index;
  }

  ngOnInit(): void {
    this.changeImage();
  }

  ngOnChanges() {
    this.changeImage();
  }
}
