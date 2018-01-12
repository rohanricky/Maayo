window.addEventListener('load',function(){
var header = document.createElement("div");
header.setAttribute("id","SomethingUnique")
document.body.appendChild(header);
var h1=document.createElement("h1");
h1.setAttribute("id","demo");
var textbox = document.createElement("div");
textbox.setAttribute("id","talk-bubble");
textbox.setAttribute("class","tri-right border btm-right-in");
textbox.innerHTML='<div class="talktext">\
  <input id="input" type="text" />\
</div>';
document.body.appendChild(textbox);

document.getElementById("SomethingUnique").addEventListener("click",function(){
    var display=document.getElementById('talk-bubble');
    display.style.display=='none' ? display.style.display='block' : display.style.display='none';
});
/*
function onEnter(e){
  if(e.key=="Enter"){
    var x = document.getElementById("input").value;
    alert(x);
  }
}
*/
document.getElementById("input").addEventListener('keypress',(event)=>{
  if(event.key=="Enter"){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://192.168.43.167:7823/apiLu12k3Cat8V5FR10cOyQ",true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("open facebook");
    alert("hi");
  }
},false);
/*
$("#SomethingUnique").click(function(){
  $("#talk-bubble").css("display")=='none'?$("#talk-bubble").css("display","block"):$("#talk-bubble").css("display","none");
});
//$('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>')
$(document).click(function(){
  $("#talk-bubble").hide();
  });
*/
});
