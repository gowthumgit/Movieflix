import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiHomeComponent } from './delhi-home.component';

describe('DelhiHomeComponent', () => {
  let component: DelhiHomeComponent;
  let fixture: ComponentFixture<DelhiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelhiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
