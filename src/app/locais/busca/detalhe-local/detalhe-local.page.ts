import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
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
    private modalCtrl: ModalController) { }

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
