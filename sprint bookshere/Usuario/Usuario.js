// =============================
// ATIVAR ITEM DO MENU
// =============================

var menuItem = document.querySelectorAll('.iten-menu');

function selectlink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectlink)
);


// =============================
// EXPANDIR MENU LATERAL
// =============================

var btnExp = document.querySelector('.expandir i');
var Menuside = document.querySelector('.barra-lateral');

if (btnExp) {
    btnExp.addEventListener('click', function () {
        Menuside.classList.toggle('expandir');
    });
}



// =============================
// CARREGAR DADOS SALVOS
// =============================

document.addEventListener("DOMContentLoaded", function () {

    // ---- INFORMAÇÕES DO USUÁRIO ----
    document.querySelector(".left-info input[placeholder='Email']").value =
        localStorage.getItem("email") || "";

    document.querySelector(".left-info input[placeholder='Estado']").value =
        localStorage.getItem("estado") || "";

    document.querySelector(".left-info input[placeholder='Telefone']").value =
        localStorage.getItem("telefone") || "";

    document.querySelector(".left-info input[placeholder='Idade']").value =
        localStorage.getItem("idade") || "";

    // Foto do usuário
    let fotoUser = localStorage.getItem("fotoUsuario");
    if (fotoUser) {
        let perfil = document.querySelector(".foto-perfil");
        perfil.style.backgroundImage = `url(${fotoUser})`;
        perfil.style.backgroundSize = "cover";
        perfil.style.backgroundPosition = "center";
    }

    // ---- INFORMAÇÕES DO LIVRO ----
    document.querySelector(".left-livros input[placeholder='Título']").value =
        localStorage.getItem("titulo") || "";

    document.querySelector(".left-livros input[placeholder='Idioma']").value =
        localStorage.getItem("idioma") || "";

    document.querySelector(".left-livros input[placeholder='Editora']").value =
        localStorage.getItem("editora") || "";

    document.querySelector(".left-livros input[placeholder='Descrição']").value =
        localStorage.getItem("descricaoLivro") || "";

    // Foto do livro
    let fotoLivro = localStorage.getItem("fotoLivro");
    if (fotoLivro) {
        let livro = document.querySelector(".foto-livro");
        livro.style.backgroundImage = `url(${fotoLivro})`;
        livro.style.backgroundSize = "cover";
        livro.style.backgroundPosition = "center";
    }
});



// =============================
// SALVAR INFORMAÇÕES DIGITADAS
// =============================

document.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", function () {

        // Usuário
        if (this.placeholder === "Email") localStorage.setItem("email", this.value);
        if (this.placeholder === "Estado") localStorage.setItem("estado", this.value);
        if (this.placeholder === "Telefone") localStorage.setItem("telefone", this.value);
        if (this.placeholder === "Idade") localStorage.setItem("idade", this.value);

        // Livros
        if (this.placeholder === "Título") localStorage.setItem("titulo", this.value);
        if (this.placeholder === "Idioma") localStorage.setItem("idioma", this.value);
        if (this.placeholder === "Editora") localStorage.setItem("editora", this.value);
        if (this.placeholder === "Descrição") localStorage.setItem("descricaoLivro", this.value);
    });
});



// =============================
// FOTO DO USUÁRIO
// =============================

document.getElementById("fotoUsuario").addEventListener("change", function () {

    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        localStorage.setItem("fotoUsuario", e.target.result);

        const perfil = document.querySelector(".foto-perfil");
        perfil.style.backgroundImage = `url(${e.target.result})`;
        perfil.style.backgroundSize = "cover";
        perfil.style.backgroundPosition = "center";
    };

    reader.readAsDataURL(file);
});



// =============================
// FOTO DO LIVRO
// =============================

document.getElementById("fotoLivro").addEventListener("change", function () {

    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        localStorage.setItem("fotoLivro", e.target.result);

        const livro = document.querySelector(".foto-livro");
        livro.style.backgroundImage = `url(${e.target.result})`;
        livro.style.backgroundSize = "cover";
        livro.style.backgroundPosition = "center";
    };

    reader.readAsDataURL(file);
});



// =============================
// BOTÃO CADASTRAR LIVRO
// =============================

document.querySelector(".btn-cadastrar-livro").addEventListener("click", function () {

    // Aqui você pode colocar validações, como: precisa preencher tudo
    if (
        !localStorage.getItem("titulo") ||
        !localStorage.getItem("descricaoLivro") ||
        !localStorage.getItem("fotoLivro")
    ) {
        alert("Por favor, preencha todos os campos e adicione uma foto do livro.");
        return;
    }

    alert("📚 Livro cadastrado com sucesso!");

});
