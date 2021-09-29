import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material.module";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { StarsRaitingComponent } from './components/stars-raiting/stars-raiting.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ButtonPulseAnimationDirective } from './directives/button-pulse-animation.directive';
import { LaptopSpecsTableComponent } from "./components/tables/laptop-specs-table/laptop-specs-table.component";
import { PhoneSpecsTableComponent } from "./components/tables/phone-specs-table/phone-specs-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoadingSpinnerComponent, StarsRaitingComponent, AddToCartButtonComponent, ButtonPulseAnimationDirective, LaptopSpecsTableComponent, PhoneSpecsTableComponent],
  imports: [AngularMaterialModule, CommonModule],
  exports: [LoadingSpinnerComponent, StarsRaitingComponent, AngularMaterialModule, AddToCartButtonComponent, LaptopSpecsTableComponent, PhoneSpecsTableComponent]
})

export class SharedModule {}
