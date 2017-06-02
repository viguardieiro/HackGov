$(document).foundation();
$('input').click(function(){
    if(this.value =="SEU EMAIL"){
        this.value = "";
    }
})

function checkEmail(){
    if($('#email').val().indexOf("@") > -1){
        $('.enviar').addClass("pronto");
        $('.enviar').removeClass("npronto");
    }else{
        $('.enviar').addClass("npronto");
        $('.enviar').removeClass("pronto");
    }
}

window.setInterval(checkEmail, 1000);

$("button").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.frase', {
    strings: ["CRIE","HACKEIE","IMPACTE","3 MESES","6 SÁBADOS","6 WORKSHOPS","7 EQUIPES","HACKGOV^2000","SUAS LINHAS DE CÓDIGO VÃO MUDAR O BRASIL^3000"],
    typeSpeed: 0,
    loop: true,
    shuffle: false,
    backDelay: 500
    });
    Typed.new('.heroFrase', {
    strings: ["Hackgov"],
    typeSpeed: 10,
    loop: false,
    shuffle: false,
    backDelay: 1500
    });

});

$( "#form" ).submit(function( event ) {
  if ($('#email').val().indexOf("@") > -1) {
    return;
  }
  event.preventDefault();
});
