/*$(document).ready(function () {
     var contador = 1;
    $("#menu_bar").hover(function(){
        if(contador == 1){
            $("#main-navbar").animate({left: '0'});
            contador = 0;
        } else {
            contador = 1;
            $("#main-navbar").animate({left: '-100%'});
        }
    });
});*/
                 
$(document).ready(main);
 var contador = 1;
 
function main() {
	$(".menu_bar").click(function () {
        if(contador == 1){
            $(".main-navbar").animate({left: '0'});
            contador = 0;
        } else {
            contador = 1;
            $(".main-navbar").animate({left: '-100%'});
        }
    });
};