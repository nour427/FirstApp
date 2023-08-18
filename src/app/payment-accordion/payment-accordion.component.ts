import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService } from '../stripe.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { PaymentsuccessComponent } from '../paymentsuccess/paymentsuccess.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentechecComponent } from '../paymentechec/paymentechec.component';
import { windowToggle } from 'rxjs';
import { ErrorCodeComponent } from '../error-code/error-code.component';

import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-payment-accordion',
  templateUrl: './payment-accordion.component.html',
  styleUrls: ['./payment-accordion.component.css'],
})
export class PaymentAccordionComponent implements OnInit {
  // checkbox address
  x = false;
isSelected(event: any) {
    if (event.checked == true) {
      console.log('checkbox is checked');
      this.x = true;
    } else {
      this.x = false;
    }
  }
  //précendent
  openPayment() {
    this.matDialog.open(PaymentComponent, {
      width: '620px',
      autoFocus: false,
    });
  }
//payment element
  @ViewChild('paymentElementRef', { static: true }) paymentElementRef:
    | ElementRef
    | undefined;
  stripe: any;
  clientSecret: string | undefined;

  billingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PaymentAccordionComponent>,
    private stripeService: StripeService,
    private matDialog: MatDialog,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.billingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    const publishableKey =
      'pk_test_51NShvBAsWPWZdLNGjRSfGppEtpdiPxKfc3UK86MYmeR6SQ8JHiw1VzcuQCMbCIYNTXpBlouSiPPeWHDQ0v3NcU4R0066hM2ZS7';
    this.stripe = Stripe(publishableKey);

    // Fetch the client secret from the server
    const response = await fetch('http://localhost:3000/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 2999, currency: 'eur' }),
    });
    const data = await response.json();
    console.log(data);
    this.clientSecret = data.clientSecret;

    console.log(this.clientSecret);
    const name = this.billingForm?.get('name')?.value;
    const email = this.billingForm?.get('email')?.value;
    // Create and mount the payment element
    const appearance = {
      theme: 'stripe',
      variables: { colorPrimaryText: '#262626' },
    };
    const options = {
      layout: {
        type: 'accordion',
        defaultCollapsed: false,
        radios: true,
        spacedAccordionItems: false,
      },
      fields: {
        billingDetails: {
          name: 'auto',
          email: 'auto',
        },
      },
    };

    const elements = this.stripe.elements({
      clientSecret: this.clientSecret,
      appearance,
    });

    const paymentElement = elements.create(
      'payment',
      options,
      {
        //Todo should add apple_pay
        paymentMethodOrder: ['card', 'paypal'],
      },

      { clientSecret: this.clientSecret }
    );
    paymentElement.mount(this.paymentElementRef?.nativeElement);


  }



  async handlePayment() {
    const appearance = {
      theme: 'stripe',
      variables: { colorPrimaryText: '#262626' },
    };
    const options = {
      layout: {
        type: 'accordion',
        defaultCollapsed: false,
        radios: true,
        spacedAccordionItems: false,
      },
      fields: {
        billingDetails: {
          name: 'auto',
          email: 'auto',
        },
      },
    };
    const elements = this.stripe.elements({
      clientSecret: this.clientSecret,appearance
    });
    const paymentElement = elements.create(
      'payment',options,

      {
        //Todo should add apple_pay
        paymentMethodOrder: ['card', 'paypal'],
      },

      { clientSecret: this.clientSecret }
    );
    paymentElement.mount(this.paymentElementRef?.nativeElement);
   //const form = document.getElementById('payment-form');
    elements.submit();

    try {
      const result = await this.stripe.confirmPayment({
        clientSecret: this.clientSecret,
        elements: elements,
        confirmParams: {
         // payment_method_data:form,
          return_url: 'https://example.com',
        },
      });
     

      if (result.error) {
        this.dialogRef?.close();

        this.router.navigate(['paymentechec']);

        console.error('Payment failed.');
      } else {
        this.dialogRef?.close();

        this.router.navigate(['paymentsuccess']);

        console.log('Payment succeeded!');
      }
    } catch (error) {
      console.error(error);
      this.dialogRef?.close();

      this.router.navigate(['errorcode']);
      // Handle payment error, show error message or redirect to an error page

      console.error('Payment error');
    }

    //method with post error but it specifies the type pf error

    /*const result = await this.stripe.confirmPayment({
      clientSecret: this.clientSecret,
      confirmParams: {
        return_url: 'https://your-website.com/payment-return', // Replace with your actual return URL
      },
      redirect: "if_required",

    });

    if (result.error) {
      // Inform the customer that there was an error.
      console.log(result.error.message);
    } else {
      // Handle next step based on PaymentIntent's status.
      console.log('PaymentIntent ID: ' + result.paymentIntent.id);
      console.log('PaymentIntent status: ' + result.paymentIntent.status);

    }
*/

    // Handle payment submission, e.g., complete the payment or show payment success/error message
    // Send the payment intent to the backend for confirmation and payment processing

    //method with error but without post error

    /*try {
      const result = await this.stripe.confirmPayment({ clientSecret: this.clientSecret });
      console.log(result.paymentIntent.status);
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

      console.error('Payment error');
    }*/

    /*console.log("result.paymentIntent.status");
      try {
        const { error, paymentIntent } = await this.stripe.confirmPayment({
          clientSecret:this.clientSecret,
          confirmParams: {
            return_url: "https://your-website.com/payment-return", // Replace with your actual return URL
          },
          redirect: "if_required",
        });

        if (error) {
          console.error(error);
          // handleError();
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
          console.log("Payment succeeded");
          // handleSuccess();
        } else {
          console.log("Payment failed");
          // handleOther();
        }
      } catch (error) {
        console.error(error);
      }*/
  }
}
