var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

function menutoggle() {
    if(menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "100vh"
    }

    else {
        menulist.style.maxHeight = "0px";
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function login() {
    var login = document.getElementsByClassName("login-btn").value;
    window.location.href = "http://127.0.0.1:5500/login.html";
}