import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { AffairesService } from 'src/app/services/affaires.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  constructor(private affairesService: AffairesService, private panierService: PanierService ) {
    
  }

  columns: any;
  rows!: any[];
  ColumnMode = ColumnMode;
  
  ngOnInit(): void {
    this.columns = this.affairesService.getColumns();
    this.affairesService.getAffaires().subscribe((a) => {
      this.rows = a;
    })
    this.affairesService.load();
    
  }

  onActivate(event: any) {
    if (event.type === "click") {
      this.panierService.addAffaire(event.row);
    }
  }

  rowClass(row?: any) {
    return 'btn';
  }
}
