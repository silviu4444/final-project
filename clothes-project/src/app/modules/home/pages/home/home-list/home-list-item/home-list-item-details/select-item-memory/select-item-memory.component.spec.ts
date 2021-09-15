import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemMemoryComponent } from './select-item-memory.component';

describe('SelectItemMemoryComponent', () => {
  let component: SelectItemMemoryComponent;
  let fixture: ComponentFixture<SelectItemMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectItemMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
