import { Component, OnInit } from '@angular/core';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { Local } from '../../local.model';
import { LocaisService } from '../../locais.service';
import { NavController } from '@ionic/angular';
import { FormGroup , Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})
export class EditarOfertaPage implements OnInit {
  local: Local;
  form: FormGroup;

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
      this.local = this.locaisService.getLocal(paramMap.get('idLocal'));
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
  }

  editarOferta(){
    if (!this.form.valid){
      return;
    }
  }

}
