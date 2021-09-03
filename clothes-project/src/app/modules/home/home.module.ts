import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePhoneItemComponent } from './pages/home/home-list/home-phone-item/home-phone-item.component';
import { HomeListComponent } from './pages/home/home-list/home-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { HomeLaptopItemComponent } from './pages/home/home-list/home-laptop-item/home-laptop-item.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [HomeComponent, HomePhoneItemComponent, HomeListComponent, HomeLaptopItemComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
