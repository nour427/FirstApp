import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StripeService } from '../stripe.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { PaymentsuccessComponent } from '../paymentsuccess/paymentsuccess.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentechecComponent } from '../paymentechec/paymentechec.component';
import { windowToggle } from 'rxjs';
import { ErrorCodeComponent } from '../error-code/error-code.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-accordion',
  templateUrl: './payment-accordion.component.html',
  styleUrls: ['./payment-accordion.component.css']
})
export class PaymentAccordionComponent implements OnInit {
  @ViewChild('paymentElementRef', { static: true }) paymentElementRef: ElementRef | undefined;
  stripe: any;
  clientSecret: string | undefined;

  constructor(
    public   dialogRef: MatDialogRef<PaymentAccordionComponent>,
     private stripeService: StripeService , private matDialog:MatDialog,private router: Router) {}
  async ngOnInit() {
    const publishableKey = 'pk_test_51NShvBAsWPWZdLNGjRSfGppEtpdiPxKfc3UK86MYmeR6SQ8JHiw1VzcuQCMbCIYNTXpBlouSiPPeWHDQ0v3NcU4R0066hM2ZS7';
    this.stripe = Stripe(publishableKey);

    // Fetch the client secret from the server
    const response = await fetch('http://localhost:3000/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 100, currency: "eur" }),
    });
    const data = await response.json();

    this.clientSecret = data.clientSecret;
    console.log(this.clientSecret)

    // Create and mount the payment element
    const appearance = {
      theme: 'stripe',
      variables: { colorPrimaryText: '#262626' }
    };
    const options = {

      layout: {
        type: 'accordion',
        defaultCollapsed: false,
        radios: true,
        spacedAccordionItems: false
      },

        fields: {
          billingDetails: {
            name: 'auto',
          }
        }

    };

    const elements = this.stripe.elements({clientSecret: this.clientSecret,appearance});
    const paymentElement = elements.create('payment',options,{
      //Todo should add apple_pay
      paymentMethodOrder: ['card', 'paypal'],

        },
    { clientSecret: this.clientSecret });
    paymentElement.mount(this.paymentElementRef?.nativeElement);
  }

  async handlePayment () {
    // Handle payment submission, e.g., complete the payment or show payment success/error message
    // Send the payment intent to the backend for confirmation and payment processing
    try {
      const result = await this.stripe.confirmPayment({ clientSecret: this.clientSecret });
      if (result.paymentIntent.status === 'succeeded') {
        // Payment succeeded, show success message or redirect to a success page

          this.dialogRef?.close();

          this.router.navigate(['paymentsuccess']);

        console.log('Payment succeeded!');}
       else {
        // Payment failed, show error message or redirect to an error page
        this.dialogRef?.close();

        this.router.navigate(['paymentechec']);


        console.error('Payment failed.');
      }

    } catch (error) {
        this.dialogRef?.close();

      this.router.navigate(['errorcode']);
      // Handle payment error, show error message or redirect to an error page

      console.error('Payment error:', 'error.message');
    }
  }
}


