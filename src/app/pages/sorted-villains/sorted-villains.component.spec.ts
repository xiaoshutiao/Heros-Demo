import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedVillainsComponent } from './sorted-villains.component';

describe('SortedVillainsComponent', () => {
  let component: SortedVillainsComponent;
  let fixture: ComponentFixture<SortedVillainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedVillainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
