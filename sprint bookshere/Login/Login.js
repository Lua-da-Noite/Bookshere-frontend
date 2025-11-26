
// Animação de flutuação do livro
function animarLivro() {
    const livro = document.querySelector(".container-livro");

    let posicao = 0;
    let subindo = true;

    setInterval(() => {
        if (subindo) posicao += 0.3;
        else posicao -= 0.3;

        livro.style.transform = `translateY(${posicao}px)`;

        if (posicao >= 10) subindo = false;
        if (posicao <= 0) subindo = true;

    }, 50);
}
animarLivro();

// Botão Login (simulação)
document.querySelector(".botao-login").addEventListener("click", () => {
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Login realizado com sucesso! (simulação)");
});

// Botão Cadastro → vai para a página de cadastro
document.querySelector(".botao-cadastro").addEventListener("click", () => {
    window.location.href = "../Cadastro/Cadastro.html";
});







