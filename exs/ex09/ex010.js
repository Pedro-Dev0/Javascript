/*var agora = new Date()
var hora = agora.getHours()

console.log (`Agora é exatamente ${hora}`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}*/

var data = new Date()
var diaSem = data.getDay()


/*
0 domingo
1 segunda
2 terça
3 quarta
4 quinta
5 sexta
6 sábado

*/
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Esse dia não existe nessa galaxia ou no estado de São Paulo')
        break
}

