export class Negociacao{
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(_data: Date, quantidade: number,valor: number){
        this._data =_data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number{
       return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._valor * this._quantidade;
    }

}