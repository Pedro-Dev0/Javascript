let num = [ 2, 5, 6 ] 

num[3] = 4
num.push(7)
num.length
console.log(`nosso vetor é o ${num[4]}`)
console.log(`nossos vetores são ${num}`)
num.sort()
console.log(`o comprimento do nosso vetor é ${num.length}`)
console.log(`em ordem é assim ${num}`)



/*
for(pos=0; pos<num.length; pos++) {
    console.log(`${num[pos]}`)
}
*/

/*
pos = 0
while(pos<num.length) {
    console.log(`${num[pos]}`)
    pos++
}
*/

do {
    pos = 0
    console.log(`${num[pos]}`)
    pos++
} while (pos<num.length)