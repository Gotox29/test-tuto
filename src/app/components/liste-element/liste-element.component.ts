import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste-element',
  templateUrl: './liste-element.component.html',
  styleUrls: ['./liste-element.component.scss']
})
export class ListeElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() affaire: any;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    this.clickEvent.emit(this.affaire.id);
  }

}
