export default class Cl_cantGenero{
    constructor() {
        this.contT = 0;
        this.contM = 0;
        this.contH = 0;
    }
    procesarPersonas(per){
        this.contT ++;
        if(per.sexo == 2){
            this.contM ++;
        }
        if(per.sexo == 1){
            this.contH ++;
        }
    }
    porctMujer(){
        return (this.contM * (100/this.contT)).toFixed(2);
    }
    mayorCantGen(){
        if(this.contM > this.contH){
            return "Hay mas mujeres";
        } else if(this.contH > this.contM){
            return "Hay mas hombres";
        } else{
            return "Hay tanto hombres como mujeres por igual";
        }
    }
}