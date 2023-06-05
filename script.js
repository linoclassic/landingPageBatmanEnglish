function menuShow() {
    let menuMobile = document.querySelector('.mobileMenu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        // document.querySelector('.icon').src = "img/menuHambuergerWhite.png";
    }
    else {
        menuMobile.classList.add('open');
        // document.querySelector('.icon').scr = "img/menuCloseWhite.png";
    }
}