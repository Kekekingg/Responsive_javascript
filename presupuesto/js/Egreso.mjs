import Dato from './Dato.mjs'

export default class Engreso extends Dato {
    static contadorEgresos = 0;
    
    constructor(descripcion, valor) {
        super(descripcion, valor)
        this._id = this.contadorEngresos + 1
    }

    getId = () => this._id
}

