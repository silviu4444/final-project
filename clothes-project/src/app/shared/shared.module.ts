import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PhoneSpecsTableComponent } from './components/tables/phone-specs-table/phone-specs-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { LaptopSpecsTableComponent } from './components/tables/laptop-specs-table/laptop-specs-table.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, PhoneSpecsTableComponent, LaptopSpecsTableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [LoadingSpinnerComponent, PhoneSpecsTableComponent, LaptopSpecsTableComponent]
})
export class SharedModule {}
