//FUNCOES
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://web.digitalinnovation.one/home"; --abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function soma(n1,n2){
//     return n1+n2;
// }
// var validade utilizando assim a variavel fica global
// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade))

// alert(soma(5,10));


//DATE
//var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


//LAÇOS DE REPETIÇÃO
/*
var count;
for(count=0; count <= 5; count ++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/


//CONDICIONAIS
/*
var idade = prompt("Qual a sua idade?")
//var idade = 18;
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

//DICIONARIO
/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"} estilo JSON, objeto
console.log(fruta.nome);
alert(fruta.cor)
*/


//ARRAY
//var lista =["maça", "pera", "laranja"];
//lista.push("uva"); adiciona um ultimo elemento
//lista.pop(); remove o ultimo elemento do array

//console.log(lista);
//console.log(lista.join(" - ")); a lista vira uma string e substitui a virgula pelo elemento informado 
//console.log(lista.toString()); a lista vira uma string
//console.log(lista.reverse()); trás os elementos ao contrário na lista
//console.log(lista.length); quantidade de elementos que eu tenho na lista
//console.log(lista[1]); ver qual é o elemento de posição 1 da lista


//BASICO
/*
var nome = "Mateus Tostes";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
*/

//alert(nome + " tem " + idade +" anos" );
//alert(idade + idade2);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());