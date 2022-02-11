let menu = document.querySelector('.menu');

document.querySelector('.icono-menu').addEventListener('click',()=>{
    menu.classList.toggle('active-ul')
    for(let i=0; i<menu.childElementCount;i++){
        menu.children[i].classList.toggle('active-li')
        if(i==7){
            menu.children[7].style.textAlign='center'
        }
    }
});