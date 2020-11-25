import { Component, OnInit } from '@angular/core';
import { Local } from '../local.model';
import { LocaisService } from '../locais.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
  locaisCarregados: Local[];

  constructor(private locaisService: LocaisService) { }

  ngOnInit() {
    this.locaisCarregados = this.locaisService.locais;
  }

}
