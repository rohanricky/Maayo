
var header = document.createElement("div");
header.setAttribute("id","SomethingUnique")
document.body.appendChild(header);
var h1=document.createElement("h1");
h1.setAttribute("id","demo");
var textbox = document.createElement("div");
textbox.setAttribute("id","talk-bubble");
textbox.setAttribute("class","tri-right border btm-right-in");
textbox.innerHTML='<div class="talktext">\
  <input id="input" type="text" onkeypress="return onEnter(event);" />\
</div>';
document.body.appendChild(textbox);

document.getElementById("SomethingUnique").addEventListener("click",function(){
    var display=document.getElementById('talk-bubble');
    display.style.display=='none' ? display.style.display='block' : display.style.display='none';
});

function onEnter(e){
  if(e.keyCode == 13 || e.which == 13){
    alert(document.getElementById("input").value);
    return false;
  }
  return true;
}
/*
$("#SomethingUnique").click(function(){
  $("#talk-bubble").css("display")=='none'?$("#talk-bubble").css("display","block"):$("#talk-bubble").css("display","none");
});
//$('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>')
$(document).click(function(){
  $("#talk-bubble").hide();
  });
*/
