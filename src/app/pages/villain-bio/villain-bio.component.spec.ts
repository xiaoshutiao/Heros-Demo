import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainBioComponent } from './villain-bio.component';

describe('VillainBioComponent', () => {
  let component: VillainBioComponent;
  let fixture: ComponentFixture<VillainBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
