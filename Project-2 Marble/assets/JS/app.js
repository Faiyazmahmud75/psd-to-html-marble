// Back to Top function

$(function (){
   
    $(window).scroll(function () {
        let myScreen = $(this).scrollTop();
        if (myScreen > 500){
            $(".back-to-top").show(200);
        } else {
            $(".back-to-top").hide(200);
        }
    })
})
 
// VenoBox plugin code

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'circle-fade'
});