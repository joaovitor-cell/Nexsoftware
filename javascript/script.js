/* =========================================================
   ELEMENTS
========================================================= */

const menuBtn = document.querySelector('#menu-hamburger');
const navLinks = document.querySelector('#nav-links');

const header = document.querySelector('.header');

const revealElements = document.querySelectorAll('.reveal');


/* =========================================================
   MOBILE MENU
========================================================= */

/*
  Abre e fecha o menu mobile
*/
menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('active');

  menuBtn.classList.toggle('active');

});


/*
  Fecha o menu ao clicar em algum link
*/
navLinks.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', closeMenu);

});


/*
  Função responsável por fechar o menu
*/
function closeMenu(){

  navLinks.classList.remove('active');

  menuBtn.classList.remove('active');

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

/*
  Adiciona fundo mais sólido no header
  quando o usuário desce a página
*/
window.addEventListener('scroll', () => {

  header.classList.toggle(
    'scrolled',
    window.scrollY > 50
  );

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

/*
  Anima elementos quando entram na tela
*/
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('active');

    }

  });

},{
  threshold:0.15
});


/*
  Observa todos elementos com classe .reveal
*/
revealElements.forEach(element => {

  observer.observe(element);

});