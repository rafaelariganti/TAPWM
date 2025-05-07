// 1) Criar uma função em JS que a partir de um array com 3 números,
// retorne a soma deles, o quadrado do primeiro e do segundo. Exemplo
// de saída: “A soma dos três números é:x, o quadrado do primeiro é:y e o
// quadrado do segundo é:z” (UTILIZAR APPLY)
// 2) Criar uma função que recebe um array de 5 letras (A a Z). Tentar formar
// 10 palavras distintas de 5 letras em um único array resultante de strings.
// (UTILIZAR APPLY, PUSH e OUTROS MÉTODOS QUE JULGAR NECESSÁRIO

function calcularValores() {
    const numeros = Array.prototype.slice.call(arguments);
  
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const quadradoPrimeiro = Math.pow(numeros[0], 2);
    const quadradoSegundo = Math.pow(numeros[1], 2);
  
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
  }
  
  function calcular() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
  
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      document.getElementById("resultado").textContent = "Por favor, preencha todos os campos com números válidos.";
      return;
    }
  
    const resultado = calcularValores.apply(null, [n1, n2, n3]);
    document.getElementById("resultado").textContent = resultado;
  }
  