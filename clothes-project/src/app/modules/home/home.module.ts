import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePhoneItemComponent } from './pages/home/home-list/home-phone-item/home-phone-item.component';
import { HomeListComponent } from './pages/home/home-list/home-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [HomeComponent, HomePhoneItemComponent, HomeListComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
