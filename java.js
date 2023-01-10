

/* Nesse código javascript criamos uma função com nome menuShow(). Onde dentro dessa 
função criamos uma variável com nome menuMobile, de modo que ela seleciona o 
documento que ela vai precisar manipular. Nesse caso é a classe .mobile-menu que 
encontra-se em uma tag html. Depois disso, criamos uma estrutura de condição onde a 
variável menuMobile vai receber um classlist que está no css de um tipo booleano, que 
vai retornar verdadeiro ou falso.
*/

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
   
/*Se o menuMobile tiver uma classlist open no meu css e estiver aberto, assim que demos 
um clique, então vamos remover ou fechar o menu.*/

if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open'); 
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    }else{

         /*Se não tiver um menu open, ele vai adicionar.*/
       
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="./img/close_white_36dp.svg";
    }
}