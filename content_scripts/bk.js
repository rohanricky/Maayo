
var header = document.createElement("div");
header.setAttribute("id","MyNameIsRohan")
document.body.appendChild(header);
var h1=document.createElement("h1");
h1.setAttribute("id","demo");
var textbox = document.createElement("input");
textbox.setAttribute("id","Asura");

document.getElementById("MyNameIsRohan").addEventListener("click",function(){
  document.getElementById("Asura").style.display='block';
});
