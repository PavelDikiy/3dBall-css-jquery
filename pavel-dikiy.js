
$(document).ready(function(){
	
var count = 180;
var wd = 200;
var ht = 200;
var delitel = 3;
var deg = 14;
var text = " </digital-kitchen/>";
var text_legth = text.length;

var resu  = Math.round(count/delitel);
var obj = $(".Pokeboll");
var cn=0;

obj.width(wd).height(ht);
obj.append("<section class='line3d'></section>");
for(var i = 0; i <= count; i++){

if( (i % resu) == 0 ){clase = "class='tch'";}else{clase="";}
obj.append("<div id=in_"+i+" "+clase+" style='transform:rotateY("+i+"deg);-webkit-transform:rotateY("+i+"deg);'></div>");
if( ((i*2) % deg) == 0 ){cn++; obj.find("section").append("<span class='text_bl' style='transform:rotateY("+i*2+"deg) translateZ("+((wd/2)-1)+"px); -webkit-transform:rotateY("+i*2+"deg) translateZ("+((wd/2)-1.2)+"px);'><p></p></span>");
if(cn <= text_legth){
$(".line3d > .text_bl:nth-child("+cn+") p").text(text.substring(cn,cn+1));
	console.log(text.substring(cn,cn+1));}
}	
}
//for(ii = 0; ii <= text_legth; ii++){console.log(text.substring(ii,ii+1));}


});