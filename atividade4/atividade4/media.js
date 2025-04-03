alert("Vamos calcular a média do aluno!");

let nome = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

alert(`${nome}, sua média é: ${media.toFixed(2)}`);

if (media >= 7) {
    alert("Parabéns! Você foi aprovado!");
} else {
    alert("Infelizmente, você foi reprovado.");
}
