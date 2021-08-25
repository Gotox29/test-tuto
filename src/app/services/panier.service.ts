import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _stock: any[] = [];

  stock: Subject<any[]> = new Subject<any[]>() 

  constructor() { }

  addAffaire(affaire: any) {
    this._stock.push(affaire);
    this.stock.next(this._stock);
  }
  
  removeAffaire(id: number) {
    this._stock = this._stock.filter((a) => a.id !== id);
    this.stock.next(this._stock);
  }
  
  removeAllAffaires() {
    this._stock = [];
    this.stock.next(this._stock);
  }
}
