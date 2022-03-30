
let isMobileProposChecked = false;
let isMobileNosSitesChecked = false;
let isMobileBretagne = false;
let isMobileNormandie = false;
let isMobilePaysLoire = false;
let isMobileNouvAq = false;

var winX = null;
var winY = null;

/* GOOGLE MAP */

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const adresse = { lat: 48.638904744675806, lng: -2.984660148154485 };
    //
    const map = new google.maps.Map(document.getElementById("carte"), {
        zoom: 15,
        center: adresse,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: adresse,
        map: map,
    });
}
/**************/

/* vérifie si la Windows > 900 et cache 'mobile-nav-full' */
window.addEventListener("resize", function() {
    if(window.innerWidth > 900) { // if we have enough space
        hiddeMobileNav();
        enableWindowScroll();
        /* reset les sélections dans le menu quand on dépasse > 900 */
        resetIfChecked();
    }
});

/* si on arrive a 101 sur l'axe des Y en scroll alors j'affiche mon bouton 'go-up'*/
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (window.scrollY > 101) {
        scrollToTopBtn.classList.remove('hidden');
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.add('hidden');
        scrollToTopBtn.classList.remove('show');
    }

    if (winX !== null && winY !== null) {
        window.scrollTo(winX, winY);
    }



});
function disableWindowScroll() {
    winX = window.scrollX;
    winY = window.scrollY;
}

function enableWindowScroll() {
    winX = null;
    winY = null;
}

var rect = document.getElementById("scrollToTopBtn").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);


function resetIfChecked() {
    if(isMobileProposChecked) {
        showMobilePropos();
    }
    if(isMobileNosSitesChecked) {
        showMobileNosSites();
    }
    if(isMobileBretagne) {
        showMobileBretagne();
    }
    if(isMobileNormandie) {
        showMobileNormandie();
    }
    if(isMobilePaysLoire) {
        showMobilePaysLoire();
    }
    if(isMobileNouvAq) {
        showMobileNouvAq();
    }
};

function showMobileNav() {
    var mobilNavEl = document.getElementById("mobile-nav-full");
    mobilNavEl.style.display = "block";
    disableWindowScroll();
};
//hidde full nav
function hiddeMobileNav() {
    var mobilNavEl = document.getElementById("mobile-nav-full");
    mobilNavEl.style.display = "none";
    enableWindowScroll();
    resetIfChecked();
};

function showMobilePropos() {
    var mobilNavEl = document.getElementById("mobile-container-sub-ul1");
    var aProposEl = document.getElementById("mobile-p1");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobileProposChecked) {
        aProposEl.innerHTML= "A PROPOS +";
        mobilNavEl.style.display = "none";
        liEl[0].style.border = "none";

        isMobileProposChecked = false;

    }else {
        aProposEl.innerHTML = "A PROPOS -";
        mobilNavEl.style.display = "inline-block";
        liEl[0].style.border = "1px dashed white";

        isMobileProposChecked = true;
    }
};

function showMobileNosSites() {
    var mobilNavEl = document.getElementById("mobile-container-sub-ul2");
    var aProposEl = document.getElementById("mobile-p2");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobileNosSitesChecked) {
        aProposEl.innerHTML= "NOS SITES & NOS TARIFS +";
        mobilNavEl.style.display = "none";
        liEl[1].style.border = "none";

        liEl[2].style.border = "none";
        liEl[3].style.border = "none";
        liEl[4].style.border = "none";
        liEl[5].style.border = "none";
        isMobileBretagne = true;
        isMobileNormandie = true;
        isMobilePaysLoire = true;
        isMobileNouvAq = true;
        showMobileBretagne();
        showMobileNormandie();
        showMobilePaysLoire();
        showMobileNouvAq();

        isMobileNosSitesChecked = false;

    }else {
        aProposEl.innerHTML = "NOS SITES & NOS TARIFS -";
        mobilNavEl.style.display = "inline-block";
        liEl[1].style.border = "1px dashed white";

        isMobileNosSitesChecked = true;
    }
};

function showMobileBretagne() {
    var mobilNavEl = document.getElementById("mobile-container-sub-ul3");
    var aProposEl = document.getElementById("mobile-p3");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobileBretagne) {
        aProposEl.innerHTML= "BRETAGNE +";
        mobilNavEl.style.display = "none";
        liEl[2].style.border = "none";

        isMobileBretagne = false;


    }else {
        aProposEl.innerHTML = "BRETAGNE -";
        mobilNavEl.style.display = "inline-block";
        liEl[2].style.border = "1px dashed white";

        isMobileBretagne = true;

        liEl[1].style.border = "none";
        liEl[0].style.border = "none";
    }
};

function showMobileNormandie() {
    var mobilNavEl = document.getElementById("mobile-container-sub-ul4");
    var aProposEl = document.getElementById("mobile-p4");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobileNormandie) {
        aProposEl.innerHTML= "NORMANDIE +";
        mobilNavEl.style.display = "none";
        liEl[3].style.border = "none";

        isMobileNormandie = false;


    }else {
        aProposEl.innerHTML = "NORMANDIE -";
        mobilNavEl.style.display = "inline-block";
        liEl[3].style.border = "1px dashed white";

        isMobileNormandie = true;

        liEl[1].style.border = "none";
        liEl[0].style.border = "none";
    }
};

function showMobilePaysLoire(){
    var mobilNavEl = document.getElementById("mobile-container-sub-ul5");
    var aProposEl = document.getElementById("mobile-p5");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobilePaysLoire) {
        aProposEl.innerHTML= "PAYS DE LA LOIRE +";
        mobilNavEl.style.display = "none";
        liEl[4].style.border = "none";

        isMobilePaysLoire = false;


    }else {
        aProposEl.innerHTML = "PAYS DE LA LOIRE -";
        mobilNavEl.style.display = "inline-block";
        liEl[4].style.border = "1px dashed white";

        isMobilePaysLoire = true;

        liEl[1].style.border = "none";
        liEl[0].style.border = "none";
    }
};

function showMobileNouvAq(){
    var mobilNavEl = document.getElementById("mobile-container-sub-ul6");
    var aProposEl = document.getElementById("mobile-p6");
    const liEl = document.getElementsByClassName("mobile-container-main-li");

    if(isMobileNouvAq) {
        aProposEl.innerHTML= "NOUVELLE AQUITAINE +";
        mobilNavEl.style.display = "none";
        liEl[5].style.border = "none";

        isMobileNouvAq = false;


    }else {
        aProposEl.innerHTML = "NOUVELLE AQUITAINE -";
        mobilNavEl.style.display = "inline-block";
        liEl[5].style.border = "1px dashed white";

        isMobileNouvAq = true;

        liEl[1].style.border = "none";
        liEl[0].style.border = "none";
    }
};

function scrollToTop() {
    console.log("1");
    const rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    console.log("2");
}

