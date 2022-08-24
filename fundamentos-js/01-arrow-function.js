/*
    Função tradicional com 1 argumento e
    1 linha de corpo contendo return
*/
function quadrado(n) {
    return n*n
}
console.log(quadrado(7))

// Função equivalente no formato arrow function
const quadradoA = n => n*n
console.log(quadradoA(7))

/*
    Função tradicional com mais de 1 argumento
    e uma única linha de corpo contendo return
*/
function soma(a,b,c) {
    return (a+b+c)
}
console.log(soma(10,15,20))

// Função equivalente no formato arrow function
// Quando há mais de um argumento, são necessários
// parênteses em volta deles
const somaA = (a,b,c) => a+b+c
console.log(somaA(10,15,20))

/*
    Função tradicional sem argumentos e
    uma única linha de corpo contendo return
*/
function aleatorio0a9(){
    //Math.random() - Gera um número random fracionário entre 0 e 1
    //Math.floor() - Retira as casas decimais de um número fracionário
    return Math.floor(Math.random()*10)
}
console.log(aleatorio0a9())

// Função equivalente no formato arrow function
const aleatorio0a9A = () => Math.floor(Math.random()*10)
console.log(aleatorio0a9A())

/*
    Função tradicional com um argumento e múltiplas linhas de código
*/
function fatorial(n) {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}
console.log(fatorial(6))

// Função equivalente no formato arrow function
// (Nâo há economia de linhas em relação ao corpo da função)
const fatorialA = n => {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}
console.log(fatorialA(6))