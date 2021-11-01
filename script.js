const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__link');
const navSection = document.querySelector('.navigation-section');

function navAndCrossClose() {
    navigation.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}

hamburger.onclick = function() {
    navigation.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
function linkAction(){
    return navAndCrossClose();
}

window.addEventListener('click' , function(e) {
    if(navSection.contains(e.target)) {

    }
    else{
        return navAndCrossClose();
    }
});