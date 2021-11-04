const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav-link');
const navSection = document.querySelector('.nav-section');

function navAndCrossToggle() {
    navigation.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}
function navAndCrossClose() {
    navigation.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}

hamburger.onclick = navAndCrossToggle;
navLink.forEach(n => n.addEventListener('click', navAndCrossClose));

window.addEventListener('click' , function(e) {
    if(navSection.contains(e.target)) {
        
    }
    else{
        return navAndCrossClose();
    }
});