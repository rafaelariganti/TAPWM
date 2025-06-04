function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const resultado = document.getElementById('resultado');

  if (!altura || !peso || altura <= 0 || peso <= 0) {
    resultado.innerText = 'Por favor, insira valores válidos de altura e peso.';
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';
  let grau = '';

  if (imc < 18.5) {
    classificacao = 'Magreza';
    grau = '0';
  } else if (imc < 25) {
    classificacao = 'Normal';
    grau = '0';
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
    grau = 'I';
  } else if (imc < 40) {
    classificacao = 'Obesidade';
    grau = 'II';
  } else {
    classificacao = 'Obesidade Grave';
    grau = 'III';
  }

  resultado.innerText = `Seu IMC é ${imc.toFixed(2)}.\nClassificação: ${classificacao} (Obesidade Grau ${grau})`;
}
