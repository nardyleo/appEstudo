import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Local } from '../../local.model';
import { LocaisService } from '../../locais.service';
import { CriarReservaComponent } from 'src/app/reservas/criar-reserva/criar-reserva.component';

@Component({
  selector: 'app-detalhe-local',
  templateUrl: './detalhe-local.page.html',
  styleUrls: ['./detalhe-local.page.scss'],
})
export class DetalheLocalPage implements OnInit {
  local: Local;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private locaisService: LocaisService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('detalhe-local')){
        this.navCtrl.navigateBack('/locais/tabs/busca');
        return;
      }
      this.local = this.locaisService.getLocal(paramMap.get('detalhe-local'));
      console.log(this.local);
    });  
  }

  voltarTelaInicial(){
    console.log('oi');
    // this.router.navigateByUrl('/locais/tabs/busca');
    this.navCtrl.navigateBack('/locais/tabs/busca');
    
  }

  reservarLocal(){
    this.actionSheetCtrl.create({
      header: 'Escolha uma ação',
      buttons: [
        {
          text: 'Selecionar Data',
          handler: () => {
            this.abirModalReserva('select');
          }
        },
        {
          text: 'Data Aleatória',
          handler: () => {
            this.abirModalReserva('random');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
  
  abirModalReserva(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl
      .create({
        component: CriarReservaComponent,
        componentProps: {localSelecionado: this.local}
       })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirmar') {
          console.log('Reservado!');
        }
      })
  }

}
