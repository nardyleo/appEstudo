export class Reserva {
    constructor(
        public id: string,
        public idLocal: string,
        public idUsuario: string,
        public tituloLocal: string,
        public numeroPessoas: number,
    ){}
}