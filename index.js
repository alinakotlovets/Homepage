let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
        document.querySelector('header').classList.add('hide');
    }
    if (currentScrollPos < prevScrollPos) {
        document.querySelector('header').classList.remove('hide');
        document.querySelector('header').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
});


const burgerBtn = document.querySelector('.burger-menu-button');

function showBurgerMenu() {
    if (window.innerWidth < 768) {
        burgerBtn.style.display = 'block';
        document.querySelector('nav').style.display = 'none';
    } else {
        burgerBtn.style.display = 'none';
        document.querySelector('nav').style.display = 'flex';
    }
}

showBurgerMenu();
window.addEventListener('resize', function () {
    showBurgerMenu();
});


burgerBtn.addEventListener('click', function () {
    document.querySelector('nav').style.display = 'flex';
    document.querySelector('.close-mobile-menu-btn').style.display = 'block';
    document.querySelector('body').classList.add("hidden-overflow");
})

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('nav').style.display = 'none';
        document.querySelector('body').classList.remove("hidden-overflow");
        document.querySelector('.close-mobile-menu-btn').style.display = 'none';
    })
})

document.querySelector('.close-mobile-menu-btn').addEventListener('click', function () {
    document.querySelector('nav').style.display = 'none';
    document.querySelector('body').classList.remove("hidden-overflow");
    document.querySelector('.close-mobile-menu-btn').style.display = 'none';
})