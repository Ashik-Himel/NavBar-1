const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__link');

hamburger.onclick = function() {
    navigation.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
function linkAction(){
    navigation.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}