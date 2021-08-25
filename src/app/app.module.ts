import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { ListeComponent } from './components/liste/liste.component';
import { ListeElementComponent } from './components/liste-element/liste-element.component';
import { AjoutPanierComponent } from './components/modals/ajout-panier/ajout-panier.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    ListeComponent,
    ListeElementComponent,
    AjoutPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
