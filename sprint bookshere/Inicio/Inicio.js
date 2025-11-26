

var menuItem = document.querySelectorAll('.iten-menu')//guarda os elemntos do iten-menu

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}//forEach = varedura, nos vetores (variavel com varios valores)  Essa função remove a classe ativo de um item que não clicou e adiciona a classe ativo na que clicou 


menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
)// escutador de eventos


//expandir menu
var btnExp = document.querySelector('#btn-exp')// # porque trabalha com id
var Menuside = document.querySelector('.barra-lateral')//. porque trabalha com class

btnExp.addEventListener('click',function(){
    Menuside.classList.toggle('expandir')
})