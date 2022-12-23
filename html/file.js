const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');

menu.addEventListener('click', function (){
    menu.classList.toggle('active');
    mobile.classList.toggle('active');
});
