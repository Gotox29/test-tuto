import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  stock: any[] = [];

  constructor() { }

  addAffaire(affaire: any) {
    this.stock.push(affaire);
  }

  removeAffaire(id: number) {
    this.stock = this.stock.filter((a) => a.id !== id);
  }

  removeAllAffaires() {
    this.stock = [];
  }
}
