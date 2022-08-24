let media = 5.99, resultado

// Estrutura if...else para definir o valor da
// variável resultado em função da condição media >=6
if(media>=6) {
    resultado = "Aprovado"
}
else {
    resultado = "Reprovado"
}

console.log({media, resultado})

//Usando o operador ternário
resultado = media >= 6? 'Aprovado':'Reprovado'
console.log({media, resultado})

let user = 'guest', msg

if(user === 'admin') msg = 'login successful'
else msg = 'You shall not pass'
console.log({user,msg})

//Usando o operador ternário
msg = user === 'admin'? 'login successful':'You shall not pass!'
console.log({user,msg})
