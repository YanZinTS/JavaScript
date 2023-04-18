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

//-----------------------------------------------------18/04/2023--------------------------------------------------------//

//matriz + soma de linhas e colunas
var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var soma = 0

for(var linha = 0; linha < matriz.length; linha++) {
    for(var coluna = 0; coluna < matriz[linha].length; coluna++){
        soma = soma + matriz [linha] [coluna]
    }
}

console.log(soma)

//matriz + um numero inteiro, imprimir uma nova matriz
var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var novamatriz = []
var n = 10

for(i = 0; i < matriz.length; i++){
    var linha = []
    for(j = 0; j < matriz[i].length; j++){
        if(matriz.length > 0){
            linha.push(n * matriz[i][j])
        }
    }
    novamatriz.push(linha)
}
console.log(novamatriz)

//recebe uma matriz e retorna com os valores de linhas e colunas trocadas
var matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var matrizInverso = []

for(i = 0; i < matriz1.length; i++){
    var linha1 = []
    for(j = 0; j < matriz1[i].length; j++){
       linha1.push(matriz1[j][i])
    }
    matrizInverso.push(linha1)
}
console.log(matrizInverso)

//inverter as linhas, primeira com a ultima
var Matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]

var primeiro = Matriz[0]
var ultimo = Matriz[Matriz.length - 1]

Matriz[0] = ultimo
Matriz[Matriz.length - 1] = primeiro

console.log(Matriz)

//receber uma matriz e retornar qual é o maior númeor e o menor numero
var num = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]
var menor = Infinity
var maior = -Infinity

for(var i = 0; i < num.length; i++){
    for(var j = 0; j < num[i].length; j++){
       if(num[i][j] < menor){
        menor = num[i][j]
       }

       if(num[i][j] > maior){
        maior = num[i][j]
       }
    }
}

console.log(menor, maior)