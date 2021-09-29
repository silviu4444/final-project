import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material.module";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { StarsRaitingComponent } from './components/stars-raiting/stars-raiting.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ButtonPulseAnimationDirective } from './directives/button-pulse-animation.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, StarsRaitingComponent, AddToCartButtonComponent, ButtonPulseAnimationDirective],
  imports: [AngularMaterialModule],
  exports: [LoadingSpinnerComponent, StarsRaitingComponent, AngularMaterialModule, AddToCartButtonComponent]
})

export class SharedModule {}
