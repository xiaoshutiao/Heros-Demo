import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsBaseComponent } from './villains-base.component';

describe('VillainsBaseComponent', () => {
  let component: VillainsBaseComponent;
  let fixture: ComponentFixture<VillainsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
