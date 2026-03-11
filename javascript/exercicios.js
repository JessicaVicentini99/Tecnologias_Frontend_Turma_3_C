//Ex 1
let numero = Number(prompt("Digite um numero"))
if (numero % 2 == 0) {
    console.log(`O número ${numero} é par`)
} else {
    console.log(`O número ${numero} é impar`)
}

//Ex 2
let num_1 = Number(prompt("Digite o 1 numero"))
let num_2 = Number(prompt("Digite o 2 numero"))
let operador = prompt("Digite um operador (+,-,*,/)")
let resultado = null
if (operador === '+') {
    resultado = num_1 + num_2
} else if (operador === '-') {
    resultado = num_1 - num_2
} else if (operador === '*') {
    resultado = num_1 * num_2
} else if (operador === '/') {
    if (num_2 != 0) {
        resultado = num_1 / num_2
    } else {
        console.log('Erro: Divisão por zero')
    }
    
} else {
    console.log("Erro: digite um operador valido")
}
if (resultado !== null) {
    console.log(`Resultado: ${resultado}`)
}

//3
let ano = Number(prompt('Digite um ano'))

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`O ano ${ano} é bissexto`)
} else {
    console.log(`O ano ${ano} não é bissexto`)
}
 
