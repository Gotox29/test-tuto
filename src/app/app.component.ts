import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-app';

  /**
   * Une application contenant plusieur niveau de composant
   * Afficher sur une même page
   * Abonnées à plusieurs subject
   * Qui intéragice entre eux
   */
}
