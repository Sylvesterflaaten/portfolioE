var mybutton = document.getElementById("myBtn");

// Vis efter der scrolles 20px ned

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Når der klikkes, scroll til top

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
