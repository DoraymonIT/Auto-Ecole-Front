import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardEntryComponent} from './dashboard-entry.component';

describe('DashboardEntryComponent', () => {
  let component: DashboardEntryComponent;
  let fixture: ComponentFixture<DashboardEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
