
document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt('.home__title-color')
    .pause(2000)
    .delete(6, {delay: 2000})
    .type('Senior')
    .go();
    
})




// menu show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');

// active and remove menu
const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
    // active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')


    // remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction));


// scroll reveal animatin


// scroll home


// scroll about