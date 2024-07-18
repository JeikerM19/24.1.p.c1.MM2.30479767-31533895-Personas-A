export default class Cl_personas {
    constructor(n, s) {
        this.nom = n;
        this.sexo = s;
    }
    set nom(n) {
        this._nom = n;
    }
    get nom() {
        return this._nom;
    }

    set sexo(s) {
        this._sexo = s;
    } get sexo() {
        return this._sexo;
    }


}