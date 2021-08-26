import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AffairesService } from 'src/app/services/affaires.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  constructor(private affairesService: AffairesService, private panierService: PanierService ) { }

  columns: any;
  rows: any;
  ColumnMode = ColumnMode;
  
  ngOnInit(): void {
    this.rows = this.affairesService.getAffaires();
    this.columns = this.affairesService.getColumns();
  }

  /**
   * Lorsque l'utilisateur click sur une affaire dans le tableau, 
   * le programme l'ajoute au panier.
   * 
   * @param event La ligne sur laquel l'utilisateur agi(click/mouseenter/mouseout)
   */
  onActivate(event: any): void {
    if (event.type === "click") {
      console.log(event);
      this.panierService.addAffaire(event.row);
    }
  }
}
