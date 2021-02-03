import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocaisService } from '../../locais.service';

@Component({
  selector: 'app-nova-oferta',
  templateUrl: './nova-oferta.page.html',
  styleUrls: ['./nova-oferta.page.scss'],
})
export class NovaOfertaPage implements OnInit {
  form: FormGroup;

  constructor(private locaisServico: LocaisService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      descricao: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.maxLength(180),Validators.min(1)]
      }),
      preco: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.min(1)]
      }),
      dataDe: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dataAte: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  criarOferta(){
    if (!this.form.valid){
      return;
    }
    
    this.locaisServico.addLocal(
      this.form.value.titulo,
      this.form.value.descricao,
      +this.form.value.preco,
      new Date(this.form.value.dataDe),
      new Date(this.form.value.dataAte)
    );

    this.form.reset();
    this.router.navigate(['/locais/tabs/ofertas']);
  }
}
