import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDevicesComponent } from './city-devices.component';

describe('CityDevicesComponent', () => {
  let component: CityDevicesComponent;
  let fixture: ComponentFixture<CityDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
