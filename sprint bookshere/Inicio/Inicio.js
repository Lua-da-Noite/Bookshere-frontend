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
// POPUP AUTOMÁTICO
// =============================

function abrirPopup(imgSrc, titulo, descricao) {
    document.getElementById("popupImg").src = imgSrc;
    document.getElementById("popupTitulo").innerText = titulo;
    document.getElementById("popupDescricao").innerText = descricao;
    document.getElementById("popupOverlay").style.display = "flex";
}

// fechar ao clicar fora
document.getElementById("popupOverlay").addEventListener("click", (e) => {
    if (e.target.id === "popupOverlay") {
        document.getElementById("popupOverlay").style.display = "none";
    }
});

// abrir popup ao clicar no livro
document.querySelectorAll(".item-livro").forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img").src;
        const titulo = item.querySelector("p").innerText.trim();
        const desc = item.getAttribute("data-desc") || "Descrição não disponível.";

        abrirPopup(img, titulo, desc);
    });
});
