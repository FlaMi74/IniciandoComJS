/* Exercicio 1*/
alert("Hello World!")

/* Exercicio 2*/
alert("Vamos somar 2 números!")

let nOne = prompt("Digite um número:")
let nTwo = prompt("Agora outro número:")

alert(`A soma dos números é ${Number(nOne) + Number(nTwo)}!`)

/* Exercicio 3*/
alert("Tipo digitado é Numérico?")

let writeAny = prompt("Digite alguma coisa: ")

let isNumber = (writeAny * 0)

if (isNumber == 0){
   isNumber = 0
   } else {
    isNumber = "A"
   }

if ((typeof isNumber) == "number") {
    alert("O que você digitou é do tipo número!")
} else {
    alert("O que você digitou não é do tipo número!")
}

/* Exercicio 4*/
alert("Tipo digitado é String?")

let writeAny1 = prompt("Digite outra coisa: ")

let isLetter = (writeAny1 * 0)

if (isLetter != 0){
   isLetter = "A"
   } else {
    isLetter = 0
   }

if ((typeof isLetter) == "string") {
    alert("O que você digitou é do tipo string!")
} else {
    alert("O que você digitou não é do tipo string!")
}

/* Exercicio 5*/
alert("Tipo digitado é booleano?")

let writeAny2 = prompt("Você gosta de café (digite S ou N):  ")

if ((writeAny2 == "s") || (writeAny2 == "S")) {
    writeAny2 = true
    alert("O que vc digitou é do tipo booleano e vc gosta de café!")
   } else if ((writeAny2 == "n") || (writeAny2 == "N")) {
    writeAny2 = false
    alert("O que vc digitou é do tipo booleano e vc não gosta de café!")
   } else {
    alert("O que vc digitou não é uma opção válida, então não é do tipo booleano!")
   }

/* Exercicio 6, 7, 8*/
alert("Operações matemáticas")

let numOne = prompt("Digite um número:")
let numTwo = prompt("Agora outro número:")

  alert(`A subtração dos números é ${Number(numOne) - Number(numTwo)}!`)
  alert(`A multiplicação dos números é ${Number(numOne) * Number(numTwo)}!`)
  alert(`A divisão dos números é ${Number(numOne) / Number(numTwo)}!`)

/* Exercicio 9*/
alert("Verificar se é par")

let parImpar = prompt("Digite um número:")

let isNumber0 = (parImpar * 0)

if (isNumber0 == 0){
   isNumber0 = 0
   } else {
    isNumber0 = "A"
   }

let result = (Number(parImpar) % 2)

console.log(result, typeof result)

if ((result === 0) && (isNumber == 0) && (!(parImpar.includes(".")))) {
    alert(`o número é par!`)
} else if ((result != 0) && (isNumber == 0) && (!(parImpar.includes(".")))) {
    alert(`O número não é par!`)
} else {
    alert("Você não digitou um número ou o número digitado não é inteiro, então não pode ser classificado como par ou ímpar!")
}

/* Exercicio 10*/
alert("Verificar se é impar")
let parImpar1 = prompt("Digite um número:")

let isNumber1 = (parImpar1 * 0)

if (isNumber1 == 0){
   isNumber1 = 0
   } else {
    isNumber1 = "A"
   }

let result1 = (Number(parImpar1) % 2)

console.log(result1, typeof result1)

if ((result1 == 0) && (!(parImpar1.includes("."))) && (isNumber1 == 0)) {
    alert(`o número não é ímpar!`)
} else if ((result1 != 0) && (!(parImpar1.includes("."))) && (isNumber1 == 0)) {
    alert(`O número é ímpar!`)
} else {
    alert("Você não digitou um número ou o número digitado não é inteiro, então não pode ser classificado como par ou ímpar!")
}