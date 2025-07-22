let num = [ 2, 5, 6 ] 

num[3] = 4
num.push(7)
/* 
num.length
console.log(`nosso vetor é o ${num[4]}`)
console.log(`nossos vetores são ${num}`)
num.sort()
console.log(`o comprimento do nosso vetor é ${num.length}`)
console.log(`em ordem é assim ${num}`)
*/



/*
for(pos=0; pos<num.length; pos++) {
    console.log(`${num[pos]}`)
}



pos = 0
while(pos<num.length) {
    console.log(`${num[pos]}`)
    pos++
}

pos = 0
do {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    pos++
} while (pos<num.length)
*/

for(let pos in num) {
    console.log(`Seu indice é ${pos} e o seu valor é ${num[pos]}`)
}

num.indexOf(7)
num.indexOf(3)
posi = num.indexOf(4)

if (posi == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${posi}`)
}

function parimp(n) {
    if(n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimp(224)
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}

solu = soma(7, 9)
console.log(solu)

var A = function(x) {
    return x*2
}

console.log(A(10))

function fatorial(n) {
    if(n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))