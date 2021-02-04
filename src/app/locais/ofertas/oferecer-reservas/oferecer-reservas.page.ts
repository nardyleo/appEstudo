import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Local } from '../../local.model';
import { LocaisService } from '../../locais.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oferecer-reservas',
  templateUrl: './oferecer-reservas.page.html',
  styleUrls: ['./oferecer-reservas.page.scss'],
})
export class OferecerReservasPage implements OnInit , OnDestroy {
  local: Local;
  private localSub: Subscription;

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
      this.localSub = this.locaisService.getLocal(paramMap.get('idLocal')).subscribe(local => {
        this.local = local;
      });
      // console.log(this.local);
    });
  }

  ngOnDestroy(){
    if(this.localSub){
      this.localSub.unsubscribe();
    }
  }


  voltarTelaInicial(){
    // console.log('oi');
    // this.router.navigateByUrl('/locais/tabs/busca');
    this.navCtrl.navigateBack('/locais/tabs/ofertas');
    
  }
}
