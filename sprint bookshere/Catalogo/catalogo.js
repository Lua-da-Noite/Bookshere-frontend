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

