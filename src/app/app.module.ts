import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentechecComponent } from './paymentechec/paymentechec.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { NgxStripeModule } from 'ngx-stripe';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaymentAccordionComponent } from './payment-accordion/payment-accordion.component';
import { StripeModule } from 'stripe-angular';
import { ErrorCodeComponent } from './error-code/error-code.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent,
    PaymentComponent,
    PaymentdetailsComponent,
    PaymentsuccessComponent,
    PaymentechecComponent,
    PaymentAccordionComponent,
    ErrorCodeComponent,
  ],
  imports: [
    MatDividerModule,
    MatRadioModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    StripeModule.forRoot(
      'pk_test_51NShvBAsWPWZdLNGjRSfGppEtpdiPxKfc3UK86MYmeR6SQ8JHiw1VzcuQCMbCIYNTXpBlouSiPPeWHDQ0v3NcU4R0066hM2ZS7'
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
