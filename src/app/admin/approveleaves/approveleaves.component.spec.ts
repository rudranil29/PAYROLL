import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveleavesComponent } from './approveleaves.component';

describe('ApproveleavesComponent', () => {
  let component: ApproveleavesComponent;
  let fixture: ComponentFixture<ApproveleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
