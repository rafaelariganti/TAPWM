// o maior de três numeros
function maiorNumero() {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;

    if (n1 === "" || n2 === "" || n3 === "") {
        document.getElementById("resultado1").textContent = "Erro: um ou mais campos estão vazios.";
        return;
    }

    const maior = Math.max(Number(n1), Number(n2), Number(n3));
    document.getElementById("resultado1").textContent = "Maior número: " + maior;
}

// ordem crescente
function ordenarNumeros() {
    const c1 = document.getElementById("c1").value;
    const c2 = document.getElementById("c2").value;
    const c3 = document.getElementById("c3").value;

    if (c1 === "" || c2 === "" || c3 === "") {
        document.getElementById("resultado2").textContent = "Erro: um ou mais campos estão vazios.";
        return;
    }

    const nums = [Number(c1), Number(c2), Number(c3)];
    nums.sort((a, b) => a - b);
    document.getElementById("resultado2").textContent = "Ordem crescente: " + nums.join(", ");
}

// palíndromo
function verificarPalindromo() {
    let texto = document.getElementById("palavra").value;

    if (!texto.trim()) {
        document.getElementById("resultado3").textContent = "Erro: o campo está vazio.";
        return;
    }

    texto = texto.toLowerCase().replace(/\s+/g, '');
    const invertido = texto.split('').reverse().join('');
    const resultado = texto === invertido ? "É um palíndromo" : "Não é um palíndromo";
    document.getElementById("resultado3").textContent = resultado;
}

// subconjunto
function verificarSubconjunto() {
    const palavra1 = document.getElementById("palavra1").value.toLowerCase();
    const palavra2 = document.getElementById("palavra2").value.toLowerCase();

    if (!palavra1.trim() || !palavra2.trim()) {
        document.getElementById("resultado4").textContent = "Erro: uma ou ambas as palavras estão vazias.";
        return;
    }

    const resultado = palavra1.includes(palavra2) ? "É um subconjunto" : "Não é um subconjunto";
    document.getElementById("resultado4").textContent = resultado;
}
