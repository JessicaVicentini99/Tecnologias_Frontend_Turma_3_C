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
 

//4 e 5
let nomes = ["Lucas", "Carla", "José", "Amanda"]
nomes.push("Thiago")
for (let nome of nomes) {
    console.log(nome)
}

let nome_busca = prompt("Digite um nome")
let encontrado = false
for(let i = 0; i < nomes.length; i++) {
    if (nome_busca == nomes[i]) {
        encontrado = true
    }
}

if (encontrado) {
    console.log(`O ${nome_busca} foi encontrado`)
} else {
    console.log(`O ${nome_busca} não foi encontrado`)
}

//Ex 6

let numeros = [9, 2, 5, 7]

for (let i = 0; i < numeros.length; i++) {
    console.log(`Tabuada do ${numeros[i]}`)
    for (let j = 1; j <= 10; j++) {
        let resultado = numeros[i] * j
        console.log(`${numeros[i]} X ${j} = ${resultado}`)
    }
    console.log('-------------------')
}
