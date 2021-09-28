import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemPropertiesComponent } from './select-item-properties.component';

describe('SelectItemPropertiesComponent', () => {
  let component: SelectItemPropertiesComponent;
  let fixture: ComponentFixture<SelectItemPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectItemPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
