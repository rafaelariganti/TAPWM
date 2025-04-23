const respostas = [];

document.getElementById("formPesquisa").addEventListener("submit", function(event) {
  event.preventDefault();

  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  respostas.push({ idade, sexo, opiniao });

  document.getElementById("formPesquisa").reset();

  if (respostas.length === 45) {
    mostrarResultados();
  } else {
    alert(`Resposta registrada! Restam ${45 - respostas.length} respostas.`);
  }
});

function mostrarResultados() {
  const idades = respostas.map(r => r.idade);
  const totalIdade = idades.reduce((soma, idade) => soma + idade, 0);
  const mediaIdade = (totalIdade / respostas.length).toFixed(2);
  const maisVelho = Math.max(...idades);
  const maisNovo = Math.min(...idades);
  const pessimos = respostas.filter(r => r.opiniao === 1).length;
  const otimosEBons = respostas.filter(r => r.opiniao === 4 || r.opiniao === 3).length;
  const porcentagemOB = ((otimosEBons / respostas.length) * 100).toFixed(2);

  const totalSexo = {
    masculino: respostas.filter(r => r.sexo === "masculino").length,
    feminino: respostas.filter(r => r.sexo === "feminino").length,
    outros: respostas.filter(r => r.sexo === "outros").length,
  };

  document.getElementById("resultado").innerHTML = `
    <h2>Resultados da Pesquisa</h2>
    <p><strong>Média das idades:</strong> ${mediaIdade}</p>
    <p><strong>Idade da pessoa mais velha:</strong> ${maisVelho}</p>
    <p><strong>Idade da pessoa mais nova:</strong> ${maisNovo}</p>
    <p><strong>Pessoas que responderam "Péssimo":</strong> ${pessimos}</p>
    <p><strong>Porcentagem que respondeu "Ótimo" ou "Bom":</strong> ${porcentagemOB}%</p>
    <p><strong>Homens:</strong> ${totalSexo.masculino}</p>
    <p><strong>Mulheres:</strong> ${totalSexo.feminino}</p>
    <p><strong>Outros:</strong> ${totalSexo.outros}</p>
  `;
}
