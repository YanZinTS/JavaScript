var lista = []

// for (var i = 0; i < 63; i++){
//     var numero = Math.floor(Math.random() * 63)
//     if(numero != i){
//         lista.push(numero)
//     }
// }

while(lista.length < 64) {
    var numero = Math.floor(Math.random() * 64)

    if(lista.indexOf(numero) == -1) {
        lista.push(numero)
    }
}

console.log(lista)

console.log(lista.sort(function(a,b){
    return a - b
}))

var matriz = []
var linha = []

for(i = 0; i < lista.length; i++){
    linha.push(lista[i])
    if(linha.length == 8){
        matriz.push(linha)
        linha = []
    }
}

console.log(matriz)

//----------------------------------------- 02/05 ------------------------------------------------------//

var matriz = []
var linha = []

for(i = 0; i < lista.length; i++){
    linha.push(lista[i])
    if(linha.length == 8){
        matriz.push(linha)
        linha = []
    }
}

console.log(matriz)

var conteudo = document.getElementById("conteudo")
var html = ""

for(var linha = 0; linha < matriz.length; linha++) {
    html += "<div class='linha'>"
    for(var coluna = 0; coluna < matriz[linha].length; coluna++) {
        html += "<div class='coluna'></div>"
    }
    html += "</div>"
}

conteudo.innerHTML = html