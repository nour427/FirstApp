import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatingService {

  constructor() { }
  ConfirmProject(nomProjet: string, startDate: Date, endDate: Date,surface:string) {
    console.log(`the project is created successfully : nomProjet: ${nomProjet},startDate: ${startDate},endDate: ${endDate}, surface: ${surface}.`);
  }
}

