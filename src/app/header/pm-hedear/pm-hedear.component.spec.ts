import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHedearComponent } from './pm-hedear.component';

describe('PmHedearComponent', () => {
  let component: PmHedearComponent;
  let fixture: ComponentFixture<PmHedearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmHedearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHedearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
