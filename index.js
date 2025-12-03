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