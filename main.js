const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobilrMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


// agregando los eventos del click para que aparezca el menu
menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobilrMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClosed = mobilrMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobilrMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}