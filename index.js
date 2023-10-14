// Utilizei Documentação do Node.js para aprender o readline e os demais utilizados para turbinar o desafio.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do herói: ", (nome) => {
  rl.question("Digite a experiência do herói: ", (xp) => {
    xp = parseInt(xp);
    const nomeHeroi = "O Herói de nome "
    const nivelHeroi = " está no nível de "

    if (xp <= 1000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Ferro.");
    } else if (xp <= 2000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Bronze.");
    } else if (xp <= 5000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Prata.");
    } else if (xp <= 7000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Ouro.");
    } else if (xp <= 8000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Platina.");
    } else if (xp <= 9000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Ascendente.");
    } else if (xp <= 10000) {
        console.log(nomeHeroi + nome + nivelHeroi + "Imortal.");
    } else {
        console.log(nomeHeroi + nome + nivelHeroi + "Radiante.");
    }

    rl.close()
  });
});
