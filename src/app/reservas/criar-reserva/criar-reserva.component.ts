import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Local } from 'src/app/locais/local.model';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.scss'],
})
export class CriarReservaComponent implements OnInit {
  @Input() localSelecionado: Local;
  @Input() modeSelecionado: 'select' | 'random'
  @ViewChild('f', {static: true}) form: NgForm
  dataInicio: string;
  dataFim: string

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.modeSelecionado);
    const disponivelDe = new Date(this.localSelecionado.disponivelDe);
    const disponivelAte = new Date(this.localSelecionado.disponivelAte);
    if (this.modeSelecionado === 'random') {
      this.dataInicio =  new Date(
        disponivelDe.getTime() + Math.random() *
        (disponivelAte.getTime() - 7 * 24 * 60 * 60 * 1000 -
        disponivelDe.getTime())
      ).toISOString(); 
    

    this.dataFim = new Date(
      new Date(this.dataInicio).getTime() +
       Math.random() * 
       (new Date(this.dataInicio).getTime() + 
        6 * 24 * 60 * 60 * 1000 -
        new Date(this.dataInicio).getTime())
       ).toISOString();
    }
  }

  reservarLocal(){
    if(!this.form.valid || !this.datasValidas()){
      return;
    }


    this.modalCtrl.dismiss(
      { 
        dadosReserva: {
          primeiroNome: this.form.value['primeiro-nome'],
          ultimoNome: this.form.value['segundo-nome'],
          numeroHospedes: this.form.value['numero-pessoas'],
          dataInicio: this.form.value['data-de'],
          dataFim: this.form.value['data-ate']
        }
     }, 'confirmar');
  }

  onCancelar(){
    this.modalCtrl.dismiss(null,'cancelar');
  }

  datasValidas(){
    const dataInicio = new Date(this.form.value['data-de']);
    const dataFinal = new Date(this.form.value['data-ate']);
    return dataFinal > dataInicio;
  }
}
