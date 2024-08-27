//const features = document.getElementById('features');
const company = document.getElementById('company');
const featuresDropdown = document.getElementById('features-dropdown');
const companyDropdown = document.getElementById('company-dropdown');
const featuresList = document.getElementById('features-list');
const companyList = document.getElementById('company-list');
const navArrow = document.getElementsByClassName('icon-arrow');
const HeroImage = document.getElementById('hero-image');
const navWrapper = document.getElementById('nav-wrapper');
const navToggleBtn = document.getElementById('nav-toggle');
const menuIcon = document.getElementById('menu-icon')
const navCloseBtn = document.getElementById('nav-toggle-close')
const toggleSpan = document.getElementById('toggle-span')
var x = window.matchMedia("(max-width: 750px)");


featuresList.addEventListener('mouseover', function() {
    featuresDropdown.style.setProperty('display', 'block');

    for (let i = 0; i < navArrow.length; i++) {
        navArrow[0].src = 'images/icon-arrow-up.svg';
    };
});

featuresList.addEventListener('mouseout', function() {
    featuresDropdown.style.setProperty('display', 'none');

    for (let i = 0; i < navArrow.length; i++) {
        navArrow[0].src = 'images/icon-arrow-down.svg';
    };
});


companyList.addEventListener('mouseover', function() {
    companyDropdown.style.setProperty('display', 'block');

    for (let i = 0; i < navArrow.length; i++) {
        navArrow[1].src = 'images/icon-arrow-up.svg';
    };
});

companyList.addEventListener('mouseout', function() {
    companyDropdown.style.setProperty('display', 'none');

    for (let i = 0; i < navArrow.length; i++) {
        navArrow[1].src = 'images/icon-arrow-down.svg';
    };
});


// change Image to mobile view

function imageTransform(x) {
    if (x.matches) {
        HeroImage.src = 'images/image-hero-mobile.png'
    } else {
        HeroImage.src = 'images/image-hero-desktop.png'
    }
}

x.addEventListener('change', function() {
    imageTransform(x)
})

// setting up mobile nav toggle


navToggleBtn.addEventListener('click', openNavBar)
navCloseBtn.addEventListener('click',closeNavBar)

function openNavBar() {
    console.log('button clicked')
    navWrapper.style.setProperty('display', 'block')
    navToggleBtn.style.setProperty('display', 'none')
    navCloseBtn.style.setProperty('display', 'block')
    navCloseBtn.style.left = '87%'
}

function closeNavBar() {
    navWrapper.style.setProperty('display', 'none')
    navCloseBtn.style.setProperty('display', 'none')
    navToggleBtn.style.setProperty('display', 'block')
    //menuIcon.src = 'images/icon-menu.svg'
}


