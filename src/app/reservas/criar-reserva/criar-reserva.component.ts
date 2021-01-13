import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Local } from 'src/app/locais/local.model';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.scss'],
})
export class CriarReservaComponent implements OnInit {
  @Input() localSelecionado: Local;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  reservarLocal(){
    this.modalCtrl.dismiss({ message: 'Mensagem de teste!' }, 'confirmar');
  }

  onCancelar(){
    this.modalCtrl.dismiss(null,'cancelar');
  }
}
