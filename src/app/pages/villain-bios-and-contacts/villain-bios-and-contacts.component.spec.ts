import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainBiosAndContactsComponent } from './villain-bios-and-contacts.component';

describe('VillainBiosAndContactsComponent', () => {
  let component: VillainBiosAndContactsComponent;
  let fixture: ComponentFixture<VillainBiosAndContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainBiosAndContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainBiosAndContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
