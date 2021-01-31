import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-oferta',
  templateUrl: './nova-oferta.page.html',
  styleUrls: ['./nova-oferta.page.scss'],
})
export class NovaOfertaPage implements OnInit {
  form: FormGroup;

  constructor() { }

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
    console.log(this.form);
  }
}
