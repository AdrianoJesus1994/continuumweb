$(document).ready(()=>{
    //alert("Teste");

    $("#logo, #nome, #slogan").hide();


    window.addEventListener("load", ()=>{
       $("#logo").fadeIn(1000);
       $("#nome").fadeIn(1500);
       $("#slogan").fadeIn(2000);
    }, false)

})