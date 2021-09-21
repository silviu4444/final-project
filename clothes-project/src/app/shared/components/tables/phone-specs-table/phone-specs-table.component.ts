import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { selectedItem } from 'src/app/modules/home/pages/home/home.selectors';
import { HomeService } from 'src/app/modules/home/pages/home/home.service';
import { MobilePhone } from 'src/app/modules/home/pages/home/models/phone.model';
import { PhoneTableSpecs } from 'src/app/shared/home-interfaces/interfaces';

@Component({
  selector: 'app-phone-specs-table',
  templateUrl: './phone-specs-table.component.html',
  styleUrls: ['./phone-specs-table.component.scss']
})
export class PhoneSpecsTableComponent implements OnInit, OnDestroy {
  constructor(private store$: Store, private homeService: HomeService) {}

  tableData: PhoneTableSpecs[];
  displayedColumns: string[] = ['property', 'value'];
  isAlive = true;

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.store$
      .select(selectedItem)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(
        (item) =>
          (this.tableData = this.homeService.getPhoneTableData(
            item as MobilePhone
          ))
      );
  }

  setCustomCategoryStyle(rowValue: string) {
    return rowValue === 'Display' || rowValue === 'Cameras';
  }

  setCustomBackgroundColor(rowData: PhoneTableSpecs) {
    return this.homeService.setTableCategoryStyle(rowData);
  }

  setRowValue(rowData: PhoneTableSpecs, cell: HTMLElement) {
    return this.homeService.brakeColumnDataLines(rowData, cell);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
