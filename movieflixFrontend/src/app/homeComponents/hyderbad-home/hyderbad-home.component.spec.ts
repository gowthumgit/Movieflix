import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderbadHomeComponent } from './hyderbad-home.component';

describe('HyderbadHomeComponent', () => {
  let component: HyderbadHomeComponent;
  let fixture: ComponentFixture<HyderbadHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyderbadHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HyderbadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
