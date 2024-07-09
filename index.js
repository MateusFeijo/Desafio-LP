// Desafio classificador de nível de herói 
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
//depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 3.000 = Prata
Se XP for entre 3.001 e 4.000 = Ouro
Se XP for entre 4.001 e 5.000 = Platina
Se XP for entre 5.001 e 6.000 = Diamante
Se XP for entre 6.001 e 7.000 = Ruby
Se XP for entre 7.001 e 9.000 = Ascendente
Se XP for entre 8.001 e 10.000= Radiante
Se XP for maior ou igual a 10.001 = Imortal

## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**" */

let nomeDoHeroi = "Charmander"
let xp = 6000

if (xp < 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de ferro.")
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de bronze.")
} else if (xp >= 2001 && xp <= 3000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de prata.")
} else if (xp >= 3001 && xp <= 4000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de ouro.")
} else if (xp >= 4001 && xp <= 5000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de platina.")
} else if (xp >= 5001 && xp <= 6000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de diamante.")
} else if (xp >= 6001 && xp <= 7000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de rubi.")
} else if (xp >= 7001 && xp <= 9000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível ascendente.")
} else if (xp >= 8001 && xp <= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível radiante.")
} else if (xp >= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível imortal.")
}