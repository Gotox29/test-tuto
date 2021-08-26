import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffairesService {

  affaires: any[] = [
    {id: 0, commentaire: "Lorem"},
    {id: 1, commentaire: "Lorem"},
    {id: 2, commentaire: "Lorem"},
    {id: 3, commentaire: "Lorem"},
    {id: 4, commentaire: "Lorem"},
    {id: 5, commentaire: "Lorem"},
    {id: 6, commentaire: "Lorem"},
    {id: 7, commentaire: "Lorem"},
    {id: 8, commentaire: "Lorem"},
    {id: 9, commentaire: "Lorem"},
    {id: 10, commentaire: "Lorem"},
    {id: 11, commentaire: "Lorem"},
    {id: 12, commentaire: "Lorem"},
    {id: 13, commentaire: "Lorem"},
    {id: 14, commentaire: "Lorem"},
    {id: 15, commentaire: "Lorem"},
    {id: 16, commentaire: "Lorem"},
    {id: 17, commentaire: "Lorem"},
    {id: 18, commentaire: "Lorem"},
    {id: 19, commentaire: "Lorem"},
    {id: 20, commentaire: "Lorem"},
    {id: 21, commentaire: "Lorem"},
    {id: 22, commentaire: "Lorem"},
    {id: 23, commentaire: "Lorem"},
    {id: 24, commentaire: "Lorem"},
    {id: 25, commentaire: "Lorem"},
    {id: 26, commentaire: "Lorem"},
    {id: 27, commentaire: "Lorem"},
    {id: 28, commentaire: "Lorem"},
    {id: 29, commentaire: "Lorem"},
    {id: 30, commentaire: "Lorem"},
    {id: 31, commentaire: "Lorem"},
    {id: 32, commentaire: "Lorem"},
    {id: 33, commentaire: "Lorem"},
    {id: 34, commentaire: "Lorem"},
    {id: 35, commentaire: "Lorem"},
    {id: 36, commentaire: "Lorem"},
    {id: 37, commentaire: "Lorem"},
    {id: 38, commentaire: "Lorem"},
    {id: 39, commentaire: "Lorem"},
    {id: 40, commentaire: "Lorem"},
    {id: 41, commentaire: "Lorem"},
    {id: 42, commentaire: "Lorem"},
    {id: 43, commentaire: "Lorem"},
    {id: 44, commentaire: "Lorem"},
    {id: 45, commentaire: "Lorem"},
    {id: 46, commentaire: "Lorem"},
    {id: 47, commentaire: "Lorem"},
    {id: 48, commentaire: "Lorem"},
    {id: 49, commentaire: "Lorem"},
  ];

  columns: any[] = [
    {prop: "id", title: "Ids"},
    {prop: "commentaire", title: "Commentaires"}
  ]

  constructor() { }

  /**
   * Getter des affaires du tableau
   * 
   * @returns La liste des affaires du tableau
   */
  getAffaires() {
    return this.affaires;
  }
  /**
   * Getter des entêtes du tableau
   * 
   * @returns La liste des entêtes du tableau
   */
  getColumns() {
    return this.columns;
  }

}
