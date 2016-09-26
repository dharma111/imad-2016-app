console.log('Loaded!');
//Moving madi on a click in page1

var image=document.getElementById('img');
var rightmargin=0;
function moveLeft()
{
    rightmargin=rightmargin+10;
    image.style.marginLeft=rightmargin+'px';

}

image.onclick= function(){

    var int = setInterval(moveLeft,100);
};
//Javascript for second page :)
//counting number of clicks
var clicks=0;
var counting=document.getElementById('counter');
counting.onclick=function()
{
    var number=document.getElementById('count');
     clicks=clicks+1;
    number.innerHTML = clicks.toString();
};





