

function exibeAlgo() {
            document.write("Olá Bobão HAHAHAHAHAHAHAHHAHAAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAAAAAAAAAAAAAAAAAAAAAAAAHAHAHAHAHAAHHA")

            /*alert("OIII")*/

        }


/*let usuario1 = "Ana";
let senhaDoUsuario1 = "recodePro";

if (usuario1 == "Ana" && senhaDoUsuario1 == "recodePro") {
    console.log("Usuário(a) autenticado com sucesso");
} else {
    console.log("Usuário e/ou senha inválidos.");
}*/

let numero1 = 10;
/* concatenar com o & comercial*/
if(numero1 >= 10) {
    console.log("Maior ou igual a 10") & console.log("Muito legal numeros maiores");
} else {
    console.log("Muahahahaahh")
};

let tabuada = 7;
/*let contador = 0;

while (contador <= 10) {
    console.log(tabuada, 'x', contador, '=',
        tabuada * contador++
    );
}

/* variavel dentro (controle) / condição e incremento tudo estipulado dentro do laço for*/
for (let contador = 0; contador <= 10; contador++) {
    console.log(tabuada, 'x', contador, '=',
        tabuada * contador
    )
}

for (let i=1000; i>=100; i-=5) {
    console.log(i)
}

/* Array simples */
let frutas = ["Maça", "Banana", "Melancia"];
console.log(frutas);
/*Manipulação de array através de seu indice começa com 0 e vai indo crescente */
console.log(frutas[1]);
frutas[6] = "Mamão";
console.log(frutas);


/* Método push para adicionar conteudo na arrays.

let pessoas = [];
console.log(pessoas);

pessoas.push("José");
pessoas.push("Ana");
pessoas.push("Pedro");
pessoas.push("Brian");
console.log(pessoas);*/

/* Método push simplificado */

/*let pessoas = [];
pessoas.push("José", "Ana", "Pedro", "Brian");

resultado = pessoas.slice(1, 3)

console.log(pessoas)
console.log(resultado)*/


/*let pessoas = [];
pessoas.push("José", "Ana", "Pedro", "Brian");
pessoas.pop();

console.log(pessoas);
  

classe com letra maiuscula no começo

let pessoas = Array("José", "Ana", "Pedro", "Brian")

console.log(pessoas); */



let pessoas = [];
pessoas.push("José", "Ana", "Pedro", "Brian");
pessoas.splice(0,0);
pessoas.shift();
pessoas.sort();

console.log(pessoas);
console.log(pessoas.length);

/*for(let i=0; i<pessoas.length; i++) {
    console.log(pessoas[i]);
}*/

let i=0;
while (i<pessoas.length) {
    console.log(pessoas[i++]);
};

/* Map conceito mais para frente em call back */
pessoas.map(function(n) {
    console.log(n);
})



