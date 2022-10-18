import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiHomeComponent } from './mumbai-home.component';

describe('MumbaiHomeComponent', () => {
  let component: MumbaiHomeComponent;
  let fixture: ComponentFixture<MumbaiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MumbaiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MumbaiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
