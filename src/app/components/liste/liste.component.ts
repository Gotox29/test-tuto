import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor(private panierService: PanierService) { }

  affaires!: any[];
  
  ngOnInit(): void {
    this.affaires = this.panierService.stock;
  }

  removeAffaire(id: number) {
    this.panierService.removeAffaire(id);
  }
}
