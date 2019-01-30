import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainContactComponent } from './villain-contact.component';

describe('VillainContactComponent', () => {
  let component: VillainContactComponent;
  let fixture: ComponentFixture<VillainContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
