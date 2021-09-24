import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PhoneSpecsTableComponent } from './components/tables/phone-specs-table/phone-specs-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { LaptopSpecsTableComponent } from './components/tables/laptop-specs-table/laptop-specs-table.component';
import { AddToCartComponent } from './components/add-to-cart-button/add-to-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './components/cart/cart.component';
import { SharedRoutingModule } from './shared-routing.module';
import { CartTableComponent } from './components/tables/cart-table/cart-table.component';
import { CartButtonEffectDirective } from './directive/cart-button-effect.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, PhoneSpecsTableComponent, LaptopSpecsTableComponent, AddToCartComponent, CartComponent, CartTableComponent, CartButtonEffectDirective],
  imports: [MatTableModule, CommonModule, MatIconModule, SharedRoutingModule],
  exports: [LoadingSpinnerComponent, PhoneSpecsTableComponent, LaptopSpecsTableComponent, AddToCartComponent, CartComponent]
})
export class SharedModule {}
