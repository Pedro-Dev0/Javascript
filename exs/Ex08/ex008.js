console.log('Funcionou corretamente!')

var velocidade = 19
console.log(`a velocidade do seu carro é ${velocidade} km/h`)

if (velocidade > 60) {
    console.log(`Você está andando a ${velocidade} km/h e por isso foi multado já que é perigoso para você e os demais ultrapassar esse limite`)
} else if (velocidade < 20) {
    console.log(`É um perigo andar em uma velocidade tão baixa em uma via expressa peço que vá a uma via normal para sua segurança`)
} else {
    console.log(`continue dirigindo assim para sua segurança e a dos demais`)
}

console.log(`Dirija com cuidado e use cinto para sua segurança`)


var país = `Brasil`
console.log(`De qual pais você vem?`)
console.log(`Venho do ${país}`)
if (país == 'Brasil') {
    console.log('Brasileiro')
} else {
    console.log('Estrangeiro')
}