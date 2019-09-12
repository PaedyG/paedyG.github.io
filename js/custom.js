/*-----Script for Header-Text fade-in-----*/
$(document).ready(function () {
    $("#myname").fadeIn(3000); 
    $("#thatsme").fadeIn(5000);
});

/*-----Script for the radial-menu animations-----*/
$(document).ready(function() {
    var is_menu_open = false;
    var transformValues = {1: 'translate(-20px,140px)',2: 'translate(0px,120px)',3: 'translate(20px,100px)'
        ,4: 'translate(40px,80px)',5: 'translate(60px,60px)',6: 'translate(80px,40px)'};

    $(".radial_menu").on("click", function() {

        if (!is_menu_open) {
            for (i = 1; i < 7; i++) {
                $("#menu_item" + i).css({
                    'background-color': '#169bbd', 
                    'transform': transformValues[i]
                });
            }            
        } else {
            $(".menu_item").css({
                'background-color': 'darkGray', 
                'transform': 'none'
            });   
        }
        is_menu_open = !is_menu_open;
    });
});