import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { Local } from '../../local.model';
import { LocaisService } from '../../locais.service';
import { NavController } from '@ionic/angular';
import { FormGroup , Validators , FormControl} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})
export class EditarOfertaPage implements OnInit, OnDestroy {
  local: Local;
  form: FormGroup;
  private localSub: Subscription;

  constructor(
    private locaisService: LocaisService,
    private router: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('idLocal')){
        this.navCtrl.navigateBack('/locais/tabs/ofertas');
        return;
      }
      this.localSub = this.locaisService.getLocal(paramMap.get('idLocal')).subscribe(local => {
        this.local = local;
        this.form = new FormGroup({
          titulo: new FormControl(this.local.titulo,{
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          descricao: new FormControl(this.local.descricao,{
            updateOn: 'blur',
            validators: [Validators.required,Validators.maxLength(180),Validators.min(1)]
          })
        });
      });
    });
  }

  ngOnDestroy(){
    if(this.localSub){
      this.localSub.unsubscribe();
    }
  }

  editarOferta(){
    if (!this.form.valid){
      return;
    }
  }

}
