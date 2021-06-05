import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktelDetailComponent } from './cocktel-detail.component';

describe('CocktelDetailComponent', () => {
  let component: CocktelDetailComponent;
  let fixture: ComponentFixture<CocktelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktelDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
