
// Animação de flutuação do livro
function animarLivro() {
    const livro = document.querySelector(".container-livro");

    let posicao = 0;
    let subindo = true;

    setInterval(() => {
        posicao += subindo ? 0.3 : -0.3;
        livro.style.transform = `translateY(${posicao}px)`;

        if (posicao >= 10) subindo = false;
        if (posicao <= 0) subindo = true;
    }, 50);
}
animarLivro();


// Labels flutuantes
document.querySelectorAll('.campo-input input').forEach(input => {
    const atualizar = () => {
        input.classList.toggle('tem-valor', input.value.trim() !== "");
    };

    input.addEventListener('input', atualizar);
    input.addEventListener('blur', atualizar);
    window.addEventListener('load', atualizar);
});



// Botão Login

document.querySelector(".botao-login").addEventListener("click", () => {
    window.location.href = "../Login/Login.html";
});


//  Validação do Cadastro

document.getElementById("form-cadastro").addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmar = document.getElementById("confirmarSenha").value.trim();

    if (!usuario) {
        alert("Digite um nome de usuário.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso! (simulação)");
});
