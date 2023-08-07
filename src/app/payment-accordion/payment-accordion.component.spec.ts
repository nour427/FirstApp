import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAccordionComponent } from './payment-accordion.component';

describe('PaymentAccordionComponent', () => {
  let component: PaymentAccordionComponent;
  let fixture: ComponentFixture<PaymentAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentAccordionComponent]
    });
    fixture = TestBed.createComponent(PaymentAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
