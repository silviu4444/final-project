import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PhoneSpecsTableComponent } from './components/tables/phone-specs-table/phone-specs-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoadingSpinnerComponent, PhoneSpecsTableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [LoadingSpinnerComponent, PhoneSpecsTableComponent]
})
export class SharedModule {}
