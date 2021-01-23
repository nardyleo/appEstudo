import { Injectable } from "@angular/core";

import { Reserva } from './reserva.model';

@Injectable({providedIn: 'root'})
export class reservaService{
    private _reservas: Reserva[] = [
        
        new Reserva(
            'xyz',
            'l1',
            'abc',
            'teste',
            4
        ),
        new Reserva(
            'abc',
            'l2',
            'abcd',
            'testee',
            2
        )
    ];

    get reservas(){
        return [...this._reservas];
    }
    
}