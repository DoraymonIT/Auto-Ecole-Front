import { Component, OnInit } from '@angular/core';
import {Employe} from '../../controller/model/employe.model';
import {EmployeService} from '../../controller/service/employe.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AjouterUnEmployeComponent} from "./ajouter-un-employe/ajouter-un-employe.component";

@Component({
  selector: 'app-liste-des-employes',
  templateUrl: './liste-des-employes.component.html',
  styleUrls: ['./liste-des-employes.component.css']
})
export class ListeDesEmployesComponent implements OnInit {

  constructor(private employeService: EmployeService,
              private dialog: MatDialog) { }
  private _motif: string;

  get motif(): string {
    return this._motif;
  }

  set motif(value: string) {
    this._motif = value;
  }
  cols: any;
  ngOnInit() {
    this.employeService.findAll();
    this.cols = [
      { field: 'nomFR', header: 'Nom FR' },
      { field: 'nomAR', header: 'Nom AR' },
      { field: 'prenomFR', header: 'prenom FR' },
      { field: 'prenomAR', header: 'prenom AR' },
      { field: 'addresseFR', header: 'adresse FR' },
      { field: 'adresseAR', header: 'adresse AR' },
      { field: 'dateNaissance', header: 'date de Naissance' },
    ];
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public ajouterUnEmploye(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AjouterUnEmployeComponent,
      dialogConfig);
  }
}
