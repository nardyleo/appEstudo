import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-oferecer-reservas',
  templateUrl: './oferecer-reservas.page.html',
  styleUrls: ['./oferecer-reservas.page.scss'],
})
export class OferecerReservasPage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltarTelaInicial(){
    console.log('oi');
    // this.router.navigateByUrl('/locais/tabs/busca');
    this.navCtrl.navigateBack('/locais/tabs/ofertas');
    
  }
}
