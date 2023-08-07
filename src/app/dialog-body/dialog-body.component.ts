import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],


})




export class DialogBodyComponent {
  nomProjet!:Title;
  startDate!: Date;
  endDate!: Date;
  minDate = new Date();
  surface!:Text;


  createProject = new FormGroup({
    nomProjet: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    surface: new FormControl(''),
  });
  CreatingService: any;


ConfirmProject() {
  this.CreatingService.ConfirmProject(
    this.createProject.value.nomProjet ?? '',
    this.createProject.value.startDate ?? '',
    this.createProject.value.endDate ?? '',
    this.createProject.value.surface ?? '',

  );
}

/*
  beginningDate= new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);

  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
*/
};
