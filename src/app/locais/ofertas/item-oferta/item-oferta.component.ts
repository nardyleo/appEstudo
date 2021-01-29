import { Component, Input, OnInit } from '@angular/core';
import { Local } from '../../local.model';

@Component({
  selector: 'app-item-oferta',
  templateUrl: './item-oferta.component.html',
  styleUrls: ['./item-oferta.component.scss'],
})
export class ItemOfertaComponent implements OnInit {
  @Input() oferta: Local;

  constructor() { }

  ngOnInit() {}

  getDataProvisorio(){
    return new Date();
  }

}
