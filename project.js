$("#reset").css("color", "white" )
​
var opacity = document.getElementById ("saturate");
  var contrast = document.getElementById ("contrast");
  var grayscale = document.getElementById ("grayscale");
 var sebia = document.getElementById ("sebia");
var blur = document.getElementById ("blur");
var hueRotate = document.getElementById ("hue-rotate");
var upload = document.getElementById ("upload");
 var image = document.getElementById ("img");
var reset = document.getElementById ("reset");
var imageBox = document.querySelector(".image-box")
  
​
window.onload = function(){
    reset.style.display = "none"
    imageBox.style.display = "none"
}
upload.onchange = function() {
    reset.style.display = "block"
    imageBox.style.display = "block"
    var file = new FileReader ();
    file.readAsDataURL (upload.files[0]);
    file.onload = function (){
        image.src = file.result;
    }
}
$( document ).ready(function() {
    var i=5
   $("#a").click (function(){
i-- 
$("#img").css("opacity","0."+i)
var valuetest= $('#saturate').val()*1-1
$('#saturate').val(valuetest)
})
$("#b").click(function(){
    i++
    $("#img").css("opacity","0."+i)
var valuetest= $('#saturate').val()*1+1
$('#saturate').val(valuetest)
   
})
var contr=0
​
$("#d").click (function(){
   contr=contr+1
   $("#img").css("filter",`contrast(${contr}%)`)
   var valuecountr= $('#contrast').val()*1+1
   $("#contrast").val(valuecountr)
})
$("#c").click (function(){
    contr=contr-1
    $("#img").css("filter",`contrast(${contr}%)`)
    var valuecountr= $('#contrast').val()*1-1
    $("#contrast").val(valuecountr)
 })
​
var graysc=0
 $("#f").click (function(){
    graysc=graysc+10
    $("#img").css ("filter",`grayscale(${graysc}%)`)
    var valuegray= $('#grayscale').val()*1+10
    $("#grayscale").val(valuegray)
 })
 $("#e").click (function(){
    graysc=graysc-10
    $("#img").css ("filter",`grayscale(${graysc}%)`)
    var valuegray= $('#grayscale').val()*1-10
    $("#grayscale").val(valuegray)
 })
 var blurEf=0
$("#h").click (function(){
    blurEf=blurEf+1
    $("img").css("filter",`blur(${blurEf}px)`)
    var valueBlur = $("#blur").val()*1+10
    $("#blur").val(valueBlur)
})
$("#g").click (function(){
    blurEf=blurEf-1
    $("img").css("filter",`blur(${blurEf}px)`)
    var valueBlur = $("#blur").val()*1-10
    $("#blur").val(valueBlur)
})
​
})
$(document).ready(function(){
    $("#reset").click(function(){
        location.reload(true);
    });
});