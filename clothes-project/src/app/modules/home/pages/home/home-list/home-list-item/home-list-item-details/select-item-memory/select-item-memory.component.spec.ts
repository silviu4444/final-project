import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeService } from '../../../../home.service';

import { SelectItemMemoryComponent } from './select-item-memory.component';

const mockedPhoneItemSpecs = {
  sim: 'DUAL SIM',
  colors: {
    Black: ['test']
  },
  memory: ['64', '128', '256'],
  memoryRam: ['5'],
  mobileNetwork: '5G'
};
const homeServiceMock = {
  updateGBsOnTitle: () => 'test'
}

describe('SelectItemMemoryComponent', () => {
  let component: SelectItemMemoryComponent;
  let fixture: ComponentFixture<SelectItemMemoryComponent>;

  let ramOptionRef;
  let storageOptionRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectItemMemoryComponent],
      providers: [{provide: HomeService, useValue: homeServiceMock}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemMemoryComponent);
    component = fixture.componentInstance;
    component.phoneItemSpecs = mockedPhoneItemSpecs;
    fixture.detectChanges();
    ramOptionRef = fixture.debugElement.nativeElement.querySelector('.memory-option');
    storageOptionRef = fixture.debugElement.nativeElement.querySelector('.storage-option');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ram index should be set & updateGBsOnTitle should be called if an ram option was clicked', () => {
    const spyOnUpdateGBsOnTitle = spyOn(component['homeService'], 'updateGBsOnTitle');
    ramOptionRef.click();
    expect(component.phoneMemory.ram.itemIdx).toBe(0)
    expect(spyOnUpdateGBsOnTitle).toHaveBeenCalled();
  })

  it('storage index should be set if an storage option was clicked', () => {
    storageOptionRef.click();
    expect(component.phoneMemory.storage.itemIdx).toBe(0);
  })
});
