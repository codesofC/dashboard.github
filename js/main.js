//Ajouter class hovered dans un element selectionné
let list=document.querySelectorAll('.navigation li');
function activeClass(){
    list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item)=>
    item.addEventListener('mouseover', activeClass));

//Affichage menu
let toggle=document.querySelector('.toggle'),
    nav=document.querySelector('.navigation'),
    main=document.querySelector('.main');
toggle.onclick=function(){
    nav.classList.toggle('active');
    main.classList.toggle('active');
}