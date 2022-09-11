var contact_btn = document.getElementById("contact-btn");
var contact = document.getElementById("contact");
var ex_contact = document.getElementById("ex-con");

contact.style.top = "100%";
contact.style.transitionDuration = "0.4s";

contact_btn.addEventListener('click',function(){
    contact.style.top = "50%";
});

ex_contact.addEventListener('click', function(){
    contact.style.top = "100%";
});


window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('activer');
        }
        else{
            reveals[i].classList.remove('activer');
        }
    }
}