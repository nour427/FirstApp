import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentechecComponent } from './paymentechec.component';

describe('PaymentechecComponent', () => {
  let component: PaymentechecComponent;
  let fixture: ComponentFixture<PaymentechecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentechecComponent]
    });
    fixture = TestBed.createComponent(PaymentechecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
