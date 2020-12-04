import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Local } from '../../local.model';
import { LocaisService } from '../../locais.service';

@Component({
  selector: 'app-oferecer-reservas',
  templateUrl: './oferecer-reservas.page.html',
  styleUrls: ['./oferecer-reservas.page.scss'],
})
export class OferecerReservasPage implements OnInit {
  local: Local;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private locaisService: LocaisService
  )
     { }

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('idLocal')){
        this.navCtrl.navigateBack('/locais/tabs/ofertas');
        return;
      }
      this.local = this.locaisService.getLocal(paramMap.get('idLocal'));
      console.log(this.local);
    });

  }

  voltarTelaInicial(){
    // console.log('oi');
    // this.router.navigateByUrl('/locais/tabs/busca');
    this.navCtrl.navigateBack('/locais/tabs/ofertas');
    
  }
}
