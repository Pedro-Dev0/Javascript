

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

let numero1 = 9;
/* concatenar com o & comercial*/
if(numero1 > 10) {
    console.log("Maior ou igual a 10") & console.log("Muito legal numeros maiores");
} else {
    console.log("Muahahahaahh")
};

let usuario1 = "Aaan";
let emailDoUsuario1 = "Aaan@recode.org.br";
let senhaDoUsuario1 = "AaanPro";

if(usuario1 == "Aaan" && senhaDoUsuario1 == "AaanPro") {
    console.log("Autenticado com sucesso");
} else if (emailDoUsuario1 == "Aaan@recode.org.br" && senhaDoUsuario1 == "AaanPro") {
    console.log("Autenticado com sucesso");
} else {
    console.log("Usuário e/ou senha inválidos");
}

let opcao = 4;

switch (opcao) {
    case 1:
        console.log("Primeira opção")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terceira")
        break;

    default:
        console.log("Padrão")
    
}

let mes = 1

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Primeiro trismestre");
    break

    case 4:
    case 5:
    case 6:
        console.log("Segundo trimestre");
    break

    case 7:
    case 8:
    case 9:
        console.log("Terceiro trimestre")
    break

    case 10:
    case 11:
    case 12:
        console.log("Quarto trimeste")
    break

    default:
        console.log("Mês inválido")
}


let numero = 7;

if (numero == 1) {
    console.log("Iniciar");
} else {
    if (numero == 2) {
        console.log("Pausar");
    } else {
        if(numero == 3) {
            console.log("Avançar");
        } else {
            if (numero == 4) {
                console.log("Retroceder");
            } else  {
                if (numero == 5) {
                    console.log("Desligar");
                } else {
                    console.log("Comando inválido");
                }
            }
        }
    }
}



