$(document).ready(function(){
    var nav_menu = document.getElementById("menu");
    nav_menu.style.left = "100%";
    
    $("#nav-btn").click(
        function toggleMenu() {
            var bar = $("#nav-btn").children();
            if(nav_menu.style.left == "100%"){
                nav_menu.style.left = "50%";
                bar.eq(0).css({
                    "transform": "rotate(45deg)"
                });
                bar.eq(1).css("transform", "scale(0)");
                bar.eq(2).css({
                    "transform": "rotate(-45deg)"
                });
            } else {
                nav_menu.style.left = "100%";
                bar.eq(0).css({
                    "transform": "rotate(0deg)"
                });
                bar.eq(1).css("transform", "scale(1)");
                bar.eq(2).css({
                    "transform": "rotate(0deg)"
                });
            }
        }
    );
});