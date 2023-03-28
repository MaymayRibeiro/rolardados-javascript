//sistema de cassino
//vários tipos de dados
//rolar dados

class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        console.log("Resultado do dado: " + this.GetRandomIntInclusive(1,this.faces));
    }

    GetRandomIntInclusive(min,max){     //gerar números aleatórios
        min = Math.ceil(min);
        max= Math.floor(max);
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d50 = new Dado(50);

d6.Rolar();
d12.Rolar();
d50.Rolar();