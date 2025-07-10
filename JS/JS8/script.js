console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(screen.width);

window.onresize = function() {
    console.log(window.innerWidth);
    
}

/*
document.getElementsByTagName('img')[] usei isso para mudar cores e imagens de páginas web pois o document é pai do html e pode modificar e mexer no mesmo*/

let nome = "Pedro Henrique";
let email = "PedroHenrique@GMAIL.COM";

console.log(nome.toUpperCase());
console.log(email.toLowerCase());

let senha = "1234567";

if (senha.length < 8) {
    console.log("A senha deve ter pelo menos 8 caracteres!");
    console.log("A senha informada tem apenas", senha.length, "caracteres");
}

let nomes = "Pedro, Amanda, José, Briam";

console.log( nomes.split(',') );
/*Metodo split para separar em arrays as strings, esse acima separa todos os componentes entre as virgulas */

let letra = "Look, it's a new meLook it's a new me Switched up, who";

console.log( letra.split(' ') );

/* 
{
    "ong": "Recode",
    "endereco": {
        "cep": "20231-046",
        "bairro": "Centro, Lapa - RJ"
    },
    "email": "contato@recode.org.br",
    "telefones": [
        {
            "representante": "Maria",
            "telefone": "992008"
        },
        {
            "representante": "João",
            "telefone": "223245"
        }
    ]
}

 JSON */

 let jsonExample = '{"ong": "Recode", "telefone": "11124556"}';
 let exemploConversao = JSON.parse(jsonExample);

 console.log(exemploConversao);

let objeto = { ong: 'Recode', telefone: '11393494' };
let conversaoExemplo = JSON.stringify(objeto);

console.log(conversaoExemplo);


let recode = {
    "ong": "Recode",
    "endereco": {
        "cep": "20231-046",
        "bairro": "Centro, Lapa - RJ"
    },
    "email": "contato@recode.org.br",
    "telefones": [
        {
            "representante": "Maria",
            "telefone": "992008"
        },
        {
            "representante": "João",
            "telefone": "223245"
        }
    ],
    funcaoArrow: (x) => x * x,
    funcaoAnonima: function (x) { return x * x;}
};

console.log ( recode.ong );

console.log ( recode.telefones[0] );

console.log ( recode.funcaoArrow(3) );

console.log ( recode.funcaoAnonima(4) );


let user = "Francis Eduardo Ernando";
console.log( user.substring(0, 15) );


let pi = 3.1416;
console.log(pi);
console.log( Math.round(pi) );
/* Math.round a redonda o numero para cima ou para baixo, tudo depende do meio para cima ou para baixo para o mesmo arredondar automaticamente

exemplo: 3.1416 para baixo 3
3.6416 para cima/ 3.5 para cima também.*/


let pu = -1000.90089;
console.log( Math.abs(pu) );
/*Ignora o sinal de + ou - no valor o que indica se é positivo ou negativo e só traz o valor absoluto que serio o próprio sem sinal exemplo: -3 / absopluto 3
-1000/ absoluto 1000 */

console.log( Math.floor(pu) );
/*ignora os numero decimais sempre para baixo, então 3.1111
se torna 3/ e -3.111 se torna -4 pois ele ignora o decimal para baixo então logo na negativa vai diminuir um valor inteiro além de ignorar o decimal */

console.log( Math.pow(3, 2) );
/* eleva o numero fazendo uma conta de multiplicação */


