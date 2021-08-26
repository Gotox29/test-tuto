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

  /**
   * Au clic sur un element de la liste,
   * celui ci est retiré du panier.
   * 
   * @param id Identifiant de l'affaire
   */
  removeAffaire(id: number) {
    this.panierService.removeAffaire(id);
  }
}
