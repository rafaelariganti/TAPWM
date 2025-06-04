// Forma 1 Objeto literal
const Funcionario1 = {
  matricula: "01",
  nome: "Rafaela Riganti",
  funcao: "Analista de Sistemas"
};

document.getElementById("forma1").innerHTML = `
  <strong>Forma 1 - Objeto Literal</strong><br>
  Matrícula: ${Funcionario1.matricula}<br>
  Nome: ${Funcionario1.nome}<br>
  Função: ${Funcionario1.funcao}
`;

// Forma 2 new Object()
const Funcionario2 = new Object();
Funcionario2.matricula = "02";
Funcionario2.nome = "Claudionor Silva";
Funcionario2.funcao = "Desenvolvedor Back-End";

document.getElementById("forma2").innerHTML = `
  <strong>Forma 2 - new Object()</strong><br>
  Matrícula: ${Funcionario2.matricula}<br>
  Nome: ${Funcionario2.nome}<br>
  Função: ${Funcionario2.funcao}
`;

// Forma 3 Função Construtora
function Funcionario(matricula, nome, funcao) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;
}

const Funcionario3 = new Funcionario("03", "Jussara", "Gerente de Projetos");

document.getElementById("forma3").innerHTML = `
  <strong>Forma 3 - Função Construtora</strong><br>
  Matrícula: ${Funcionario3.matricula}<br>
  Nome: ${Funcionario3.nome}<br>
  Função: ${Funcionario3.funcao}
`;
