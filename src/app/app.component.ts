import { Component } from '@angular/core';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentechecComponent } from './paymentechec/paymentechec.component';
import { PaymentAccordionComponent } from './payment-accordion/payment-accordion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  constructor( private matDialog:MatDialog) {}

openDialog(){
  this.matDialog.open(DialogBodyComponent,{
  width:'350px', autoFocus: false })

}


openPaymentsuccess(){

  this.matDialog.open(PaymentsuccessComponent,{
  width:'600px',height:'500px', autoFocus: false })
  }
  openPaymentechec(){
    this.matDialog.open(PaymentechecComponent,{
    width:'600px',height:'400px', autoFocus: false })
    }




}

