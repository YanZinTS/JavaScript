//armazena e imprime todos da let
//length = ler a posição de cada item contido na lista
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberList.length; i++) {
console.log(numberList[i]);
}

//verifica se é par
//filter = filtra os elementos/itens que foi definido no return
//return = define como será feito esse filtro
let numberList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novaLista = numberList2.filter(function(elemento) {
return elemento % 2 === 0;
});
console.log(novaLista);

//verifica se é ímpar
let numberList3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novaLista1 = numberList3.filter(function(elemento) {
return elemento % 2 === 1;
});
console.log(novaLista1);

//cria uma lista com as palavras
let stringList5 = ["casa", "apartamento", "escola", "sesi"];
for (let i = 0; i < stringList5.length; i++) {
console.log(stringList5[i]);
}

//cria uma lista com as palavras com mais de 5 caractéres
let stringList4 = ["casa", "apartamento", "escola", "sesi"];
let novaLista2 = stringList4.filter(function(stringList4) {
return stringList4.length > 5;
});
console.log(novaLista2);

let mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let total = mylist.reduce(function(acumulado, atual) {
return acumulado + atual;
});
console.log(total / mylist.length);

let apenas = [2, 4, 6, 8, 10];
let mensagem = apenas.every(function(elemento) {
return elemento % 2 === 0;
});
console.log(mensagem);

var lista = [2, 4, 6, 8, 10]
var pares = true

for (var i = 0; i < lista.length; i++){
    if (lista[i] % 2 != 0) {
        pares = false
        break
    }
}

if(pares == true){
    console.log("são pares")
}else{
    console.log("nem todos ou todos são pares")
}