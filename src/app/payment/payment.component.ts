import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,

  Validators,
} from '@angular/forms';

import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { PaymentdetailsComponent } from '../paymentdetails/paymentdetails.component';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatButton } from '@angular/material/button';
import { MatRadioButton } from '@angular/material/radio';
import { PaymentAccordionComponent } from '../payment-accordion/payment-accordion.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

payment!:FormGroup;
radio!:MatRadioButton;

  constructor(private matDialog:MatDialog,   public   dialogRef: MatDialogRef<PaymentComponent>,){
    this.payment = new FormGroup({
      radio: new FormControl(null, [Validators.required,]),}
    )}

  ngOnInit(): void {
  }


  openDialog() {
    this.matDialog.open(DialogBodyComponent, {
      width: '350px',
      autoFocus: false,
    });
  }

  openPaymentdetails() {

    if ((this.payment.valid) &&(this.payment.controls['radio'].value==1)){
      this.dialogRef?.close();
      this.matDialog.open(PaymentAccordionComponent,{height: '70vh',
      width: '50vw',
      maxHeight: '70vh',
      maxWidth: '50vw',
     autoFocus: false })

    }

  }

  //TODO si choix 2 personnaliser => mail + une autre fenetre


  go() {
    if (this.payment.valid){
      console.log(this.payment.controls['radio'].value);

    }
  }

}
