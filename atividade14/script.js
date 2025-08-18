function validar() {
    let form = document.nomeform.elements;

    let nome = form["nome"].value.trim();
    let comentario = form["comentario"].value.trim();
    let pesquisaSelecionada = form["pesquisa"].value;

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    if (!pesquisaSelecionada) {
        document.getElementById("msg").innerText = 
            "Que bom que você voltou a visitar esta página!";
        return false;
    } else {
        document.getElementById("msg").innerText = 
            "Volte sempre à esta página!";
    }

    return false; 
}

function limpar() {
    document.getElementById("formulario").reset();
    document.getElementById("msg").innerText = "";
}
