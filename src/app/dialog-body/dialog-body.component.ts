import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],


})




export class DialogBodyComponent implements OnInit{

  minDate!: Date;
  createProject!:FormGroup;

  nomProjet!:Title;
  startDate!: Date;
  endDate!: Date;
  surface!:number;
;

  constructor(private matDialog:MatDialog,  public   dialogRef: MatDialogRef<PaymentComponent>,){
this.createProject = new FormGroup({
  nomProjet: new FormControl(null, [Validators.required,]),
  startDate: new FormControl(null, [Validators.required,]),
  endDate: new FormControl(null, [Validators.required,]),
  surface: new FormControl(null, [Validators.required,]),

})

};
openPayment(){
  if (this.createProject.valid){
    this.dialogRef?.close();

    this.matDialog.open(PaymentComponent,{
      width:'620px', autoFocus: false })
  }


}

ngOnInit(): void {
  this.createProject.get('startDate')?.valueChanges.subscribe((value: Date) => {
    this.minDate = value; // Met à jour la valeur de "minDate"
  });
}

submit() {
  if (this.createProject.valid){

  console.log(this.createProject.controls['nomProjet'].value);
  console.log(this.createProject.controls['startDate'].value);
  console.log(this.createProject.controls['endDate'].value);
  console.log(this.createProject.controls['surface'].value);
}
}
};
