import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapComponent } from './encap.component';

describe('EncapComponent', () => {
  let component: EncapComponent;
  let fixture: ComponentFixture<EncapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapComponent]
    });
    fixture = TestBed.createComponent(EncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
