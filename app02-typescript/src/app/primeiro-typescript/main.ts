
//declaração de variavel em js puro
var minhaVar = "minhavariavel";

//function em js
function minhaFuncao(x, y){
    return x + y;
}
var numeros = [1, 2, 3];

numeros.map(function (valor){
    return valor*2;
});


//ECMA script
let num = 2;
const PI = 3.14;

// mesma function, mas em ECMA Script
numeros.map(valor => valor * 2);

class matematica {
    soma(x, y){
        return x + y;
    }
} 

var numero: number = 4;
numero = 10;