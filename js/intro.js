var delayTime = 0;


function Loading() {
    $('nav').slideUp(0);
    $('#content').slideUp(0);
    $('footer').slideUp(0);
    delayTime = setTimeout(showPage, 2000);
}

function showPage(){
    document.getElementById("loading").style.display = "none";
    showContent();
    $('nav').delay(delayTime).slideDown(200);

}

function showContent(){
    document.getElementById("content").style.display = "flex";
    $('#content').slideUp(0);
    $('footer').slideUp(0);
    var cont_child = $('#content').children();
    cont_child.each(
        function(){
            $(this).slideUp(0);
        }
    );
    
    var textArray = $('.cmd').children();
    textArray.hide();
    for (let i = 0; i < textArray.length ; i++) {
        textArray.eq(i).delay(delayTime).show(0);
        if (i == 5 || i == 7 || i == 9 || i == 17) {
            delayTime += 1000;
        } else {
            delayTime += 80;
        }
    }
    
    $('.cmd').delay(delayTime).hide(0);
    $('footer').delay(delayTime).slideDown(500);
    $('#content').delay(delayTime).slideDown(0);
    for (let j = 0; j < cont_child.length; j++){
        cont_child.eq(j).delay(delayTime).slideDown(200);
        delayTime += 200;
    }
}