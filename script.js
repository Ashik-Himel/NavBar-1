const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const navLink = document.querySelectorAll('.navigation__link')

hamburger.onclick = function() {
    navigation.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

function linkAction(){
    navigation.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}