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

// botão correto (ícone dentro da div .expandir)
var btnExp = document.querySelector('.expandir i');

// barra lateral
var Menuside = document.querySelector('.barra-lateral');

if (btnExp) {
    btnExp.addEventListener('click', function () {
        Menuside.classList.toggle('expandir');
    });
}


// =============================
// POPUP DE LIVRO
// =============================

const itens = document.querySelectorAll(".item-livro");
const popup = document.getElementById("popupOverlay");
const popupImg = document.getElementById("popupImg");
const popupTitulo = document.getElementById("popupTitulo");
const popupDescricao = document.getElementById("popupDescricao");
const btnAdicionar = document.getElementById("btnAdicionar");

let livroSelecionado = null;

itens.forEach(item => {
    item.addEventListener("click", () => {
        let img = item.querySelector("img").src;
        let titulo = item.querySelector("p").innerText;
        let desc = item.dataset.desc;

        livroSelecionado = {
            img: img,
            titulo: titulo,
            descricao: desc
        };

        popupImg.src = img;
        popupTitulo.innerText = titulo;
        popupDescricao.innerText = desc;

        popup.style.display = "flex";
    });
});

// Fechar popup ao clicar fora
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

