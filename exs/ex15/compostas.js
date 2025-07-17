let num = [ 2, 5, 6 ] 

num[3] = 4
num.push(7)
num.length
console.log(`nosso vetor é o ${num[4]}`)
console.log(`nossos vetores são ${num}`)
num.sort()
console.log(`o comprimento do nosso vetor é ${num.length}`)
console.log(`em ordem é assim ${num}`)


pos = num[0]

for(num; pos <= 5; num++) {
    console.log(`laço ${num}`)
}