import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreHomeComponent } from './bangalore-home.component';

describe('BangaloreHomeComponent', () => {
  let component: BangaloreHomeComponent;
  let fixture: ComponentFixture<BangaloreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangaloreHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangaloreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
