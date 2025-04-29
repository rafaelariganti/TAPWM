function verificarTriangulo() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const resultado = document.getElementById("resultado");

    // verifica se os valores são números válidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.textContent = "Por favor, insira apenas números válidos.";
      return;
    }

    // verifica se formam um triângulo - regra do triângulo
    if (
      Math.abs(b - c) < a && a < b + c &&
      Math.abs(a - c) < b && b < a + c &&
      Math.abs(a - b) < c && c < a + b
    ) {
      if (a === b && b === c) {
        resultado.textContent = "Triângulo Equilátero";
      } else if (a === b || a === c || b === c) {
        resultado.textContent = "Triângulo Isósceles";
      } else {
        resultado.textContent = "Triângulo Escaleno";
      }
    } else {
      resultado.textContent = "Os valores não formam um triângulo.";
    }
  }