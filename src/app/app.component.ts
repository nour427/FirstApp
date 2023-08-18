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
    height: '80vh',
 width: '30vw',
    maxHeight: '80vh',
    maxWidth: '30vw',
    autoFocus: false, })

}
openPayment(){
  this.matDialog.open(PaymentComponent,{
  width:'620px', autoFocus: false })

}
accordionPayment(){

  this.matDialog.open(PaymentAccordionComponent,{height: '70vh',
  width: '50vw',
  maxHeight: '70vh',
  maxWidth: '50vw',
 autoFocus: false })

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

