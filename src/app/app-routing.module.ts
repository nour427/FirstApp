import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentechecComponent } from './paymentechec/paymentechec.component';
import { ErrorCodeComponent } from './error-code/error-code.component';

const routes: Routes = [
 {path: 'paymentdetails', component: PaymentdetailsComponent},
 {path: 'payment', component: PaymentComponent},
 {path:'paymentsuccess', component:PaymentsuccessComponent },
 {path:'paymentechec', component: PaymentechecComponent },
 {path:'errorcode', component: ErrorCodeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
