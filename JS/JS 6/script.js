console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(screen.width);

window.onresize = function() {
    console.log(window.innerWidth);
    
}

/*
document.getElementsByTagName('img')[] usei isso para mudar cores e imagens de páginas web pois o document é pai do html e pode modificar e mexer no mesmo



Se a interação for “no clique”, o gatilho será disparado no evento “onClick”, que significa “no clique”. Se a interação for “no movimento do mouse”, será disparado o gatilho no evento “onMouseMove”, que significa “no movimento do mouse” e assim por diante. Cada interação tem um gatilho para um evento específico.

onclick
Disparado quando o usuário clica sobre o elemento.

onchange
Disparado quando um elemento HTML foi alterado.

onmouseover
Disparado quando o usuário passa o mouse “por cima” do elemento.

onmouseout
Disparado quando o usuário movimenta o mouse “para fora” do elemento.

onkeydown
Disparado quando o usuário pressiona alguma tecla do teclado.

onload
Disparado quando o navegador termina de carregar a página.


*/

document.onscroll = function(){
    console.log('rolando...');
}


/*let dataHoraAtual = new Date();
console.log(dataHoraAtual);


console.log(new Date);*/

/*function horinhaFormatada() {
let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

let hora_formatada = hora + ':' + min + ':' + seg;

console.log(hora_formatada);
}

horinhaFormatada();*/



/*let horinhaFormatada = function (textoEntrada)
função anônima:
anonima pois a função não tem nome e é referida somente pela variavel que a contém, sem um nome próprio.

function horinhaFormatada(textoEntrada) {

Função anônima 2:
aqui foi estipulado um nome da função mas para mascarar o mesmo você vai fazer essa função se tornar uma variável, olhe abaixo como:

var (nome dela) = horinhaFormatada;
or let (nome dela) = horinhaFormatada;

var modernHours = horinhaFormatada;

console.log( modernHours(textoEntrada) ); Da certo :D
}


*/



let horinhaFormatada = (textoEntrada) =>{
    if(textoEntrada == undefined)
        return '...';
    
    let data = new Date();

    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg + ':' + textoEntrada;

    return hora_formatada;
    }

console.log( horinhaFormatada("HAHAHAH") );

console.log( horinhaFormatada() );

console.log( horinhaFormatada("AIAIAIAAI") );

let samp = horinhaFormatada;

console.log( samp("HAHAHAH") );
console.log( samp() );


let quadrado = (num) => num * num;
console.log( quadrado(5) );