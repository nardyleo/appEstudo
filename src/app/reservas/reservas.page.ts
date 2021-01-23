import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Reserva } from './reserva.model';
import { reservaService } from './reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  reservasCarregadas: Reserva[];

  constructor(private reservaService: reservaService) { }

  ngOnInit() {
    this.reservasCarregadas = this.reservaService.reservas;
    console.log(this.reservasCarregadas);
  }

  onCancelarReserva(idReserva: string, slidingElement: IonItemSliding){
    slidingElement.close();
    //cancelar a reserva
  }

}
