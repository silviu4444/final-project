import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeItemComponent } from './pages/home/home-list/home-list-item/home-list-item.component';
import { HomeListComponent } from './pages/home/home-list/home-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, MatCardModule, SharedModule],
  declarations: [HomeComponent, HomeItemComponent, HomeListComponent],
  exports: [HomeComponent, HomeItemComponent, HomeListComponent]
})
export class HomeModule {}
