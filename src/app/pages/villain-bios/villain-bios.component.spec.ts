import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainBiosComponent } from './villain-bios.component';

describe('VillainBiosComponent', () => {
  let component: VillainBiosComponent;
  let fixture: ComponentFixture<VillainBiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainBiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainBiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
