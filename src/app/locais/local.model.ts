export class Local {
    constructor(
        public id: string,
        public titulo: string,
        public descricao: string,
        public imagemUrl: string,
        public preco: number,
        public disponivelDe: Date,
        public disponivelAte: Date
    ){}
}