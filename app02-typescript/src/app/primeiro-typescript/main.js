//declaração de variavel em js puro
var minhaVar = "minhavariavel";
//function em js
function minhaFuncao(x, y) {
    return x + y;
}
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ECMA script
var num = 2;
var PI = 3.14;
// mesma function, mas em ECMA Script
numeros.map(function (valor) { return valor * 2; });
var matematica = /** @class */ (function () {
    function matematica() {
    }
    matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return matematica;
}());
var numero = 4;
numero = 10;
