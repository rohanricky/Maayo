
var header = document.createElement("div");
header.setAttribute("id","SomethingUnique")
document.body.appendChild(header);
var h1=document.createElement("h1");
h1.setAttribute("id","demo");
var textbox = document.createElement("div");
textbox.setAttribute("class","talk-bubble tri-right border btm-right-in");
textbox.innerHTML='<div class="talktext">\
  <input type="text" />\
</div>';
document.body.appendChild(textbox);

document.getElementById("SomethingUnique").addEventListener("click",function(){
    document.getElementById('talk-bubble').style.display='inline-block';
});
