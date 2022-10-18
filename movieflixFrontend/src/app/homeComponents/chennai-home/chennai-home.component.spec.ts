import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiHomeComponent } from './chennai-home.component';

describe('ChennaiHomeComponent', () => {
  let component: ChennaiHomeComponent;
  let fixture: ComponentFixture<ChennaiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChennaiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
