import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  stock: any[] = [];

  constructor() { }

  /**
   * Ajoute une affaire au stock
   * 
   * @param affaire Affaire à ajouter au stock
   */
  addAffaire(affaire: any) {
    this.stock.push(affaire);
  }

  /**
   * Retire une affaire du stock
   * 
   * @param id Identifiant de l'affaire à supprimer du panier
   */
  removeAffaire(id: number) {
    this.stock = this.stock.filter((a) => a.id !== id);
  }

  /**
   * Retire toute les affaires du stock
   */
  removeAllAffaires() {
    this.stock = [];
  }
}
