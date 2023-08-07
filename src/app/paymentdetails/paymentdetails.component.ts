//that's the initial work of payment details where i did not use stripe
// we're going to work with payment accordion component not with payment details
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit{
   hide = true;
  paymentdetails!:FormGroup;

  constructor(
    private fb: FormBuilder){
   this.paymentdetails = new FormGroup({

    radio1: new FormControl(null, [Validators.required,]),
    type:  new FormControl(null, [Validators.required,]),
})
}
  ngOnInit(): void {

  }



  go(){
    if (this.paymentdetails.valid){
      console.log(this.paymentdetails.controls['radio1'].value);

    }
  };

}





