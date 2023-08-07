import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripePromise: Promise<Stripe| null> ;

  constructor() {
    this.stripePromise = loadStripe('pk_test_51NShvBAsWPWZdLNGjRSfGppEtpdiPxKfc3UK86MYmeR6SQ8JHiw1VzcuQCMbCIYNTXpBlouSiPPeWHDQ0v3NcU4R0066hM2ZS7');
  }

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    const stripe = await this.stripePromise;
    try {
      const response = await fetch('http://localhost:3000/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { clientSecret } = data;
      console.log(clientSecret)
      return stripe?.confirmCardPayment(clientSecret);
    } catch (error) {
      throw new Error('Payment intent creation failed.');
    }
  }
}
