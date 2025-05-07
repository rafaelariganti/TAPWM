// 2) Criar uma função que recebe um array de 5 letras (A a Z). Tentar formar
// 10 palavras distintas de 5 letras em um único array resultante de strings.
// (UTILIZAR APPLY, PUSH e OUTROS MÉTODOS QUE JULGAR NECESSÁRIO

//testei no GDB online

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let letras = [];
let contador = 0;

function perguntarLetra() {
  if (contador < 5) {
    rl.question(`Digite a letra ${contador + 1} (A-Z): `, (resposta) => {
      const letra = resposta.trim().toUpperCase();
      if (/^[A-Z]$/.test(letra)) {
        letras.push(letra);
        contador++;
        perguntarLetra();
      } else {
        console.log("Digite apenas uma letra de A a Z.");
        perguntarLetra();
      }
    });
  } else {
    gerarPalavras(letras);
    rl.close();
  }
}

function gerarPalavras(letras) {
  const palavras = [];

  function embaralhar(arr) {
    const copia = arr.slice();
    let resultado = "";
    while (copia.length > 0) {
      const index = Math.floor(Math.random() * copia.length);
      resultado += copia.splice(index, 1);
    }
    return resultado;
  }

  while (palavras.length < 10) {
    let nova = embaralhar(letras);
    if (!palavras.includes(nova)) {
      palavras.push(nova);
    }
  }

  console.log("\nPalavras geradas:");
  palavras.forEach((p, i) => console.log(`${i + 1}: ${p}`));
}

perguntarLetra();
