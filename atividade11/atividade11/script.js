// função construtora Retangulo
function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularArea() {
  const base = parseFloat(prompt("Digite a base do retângulo:"));
  const altura = parseFloat(prompt("Digite a altura do retângulo:"));

  const r = new Retangulo(base, altura);
  document.getElementById("resultadoRetangulo").innerHTML =
    `Base: ${base}, Altura: ${altura}, Área: ${r.calcularArea()}`;
}

// classe Conta com herança

class Conta {
  constructor() {
    this._nomeCorrentista = '';
    this._banco = '';
    this._numeroConta = '';
    this._saldo = 0;
  }

  set nomeCorrentista(valor) { this._nomeCorrentista = valor; }
  get nomeCorrentista() { return this._nomeCorrentista; }

  set banco(valor) { this._banco = valor; }
  get banco() { return this._banco; }

  set numeroConta(valor) { this._numeroConta = valor; }
  get numeroConta() { return this._numeroConta; }

  set saldo(valor) { this._saldo = valor; }
  get saldo() { return this._saldo; }
}

class Corrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial = 0;
  }

  set saldoEspecial(valor) { this._saldoEspecial = valor; }
  get saldoEspecial() { return this._saldoEspecial; }
}

class Poupanca extends Conta {
  constructor() {
    super();
    this._juros = 0;
    this._dataVencimento = '';
  }

  set juros(valor) { this._juros = valor; }
  get juros() { return this._juros; }

  set dataVencimento(valor) { this._dataVencimento = valor; }
  get dataVencimento() { return this._dataVencimento; }
}

function criarContas() {
  const c = new Corrente();
  c.nomeCorrentista = prompt("Nome do correntista (Conta Corrente):");
  c.banco = prompt("Banco:");
  c.numeroConta = prompt("Número da conta:");
  c.saldo = parseFloat(prompt("Saldo:"));
  c.saldoEspecial = parseFloat(prompt("Saldo especial:"));

  const p = new Poupanca();
  p.nomeCorrentista = prompt("Nome do correntista (Poupança):");
  p.banco = prompt("Banco:");
  p.numeroConta = prompt("Número da conta:");
  p.saldo = parseFloat(prompt("Saldo:"));
  p.juros = parseFloat(prompt("Juros (%):"));
  p.dataVencimento = prompt("Data de Vencimento:");

  document.getElementById("resultadoConta").innerHTML = `
    <strong>Conta Corrente</strong><br>
    Nome: ${c.nomeCorrentista}<br>
    Banco: ${c.banco}<br>
    Conta: ${c.numeroConta}<br>
    Saldo: R$ ${c.saldo}<br>
    Saldo Especial: R$ ${c.saldoEspecial}<br><br>

    <strong>Conta Poupança</strong><br>
    Nome: ${p.nomeCorrentista}<br>
    Banco: ${p.banco}<br>
    Conta: ${p.numeroConta}<br>
    Saldo: R$ ${p.saldo}<br>
    Juros: ${p.juros}%<br>
    Vencimento: ${p.dataVencimento}
  `;
}
