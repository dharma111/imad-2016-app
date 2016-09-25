console.log('Loaded!');
var element = document.getElementById("text-content");
var madi = document.getElementById('img');
madi.onclick=function(){
    var time=setInterval(moveRight,100);
};
var leftmargin=0;
function moveRight()
{
    leftmargin=leftmargin+10;
img.style.marginLeft=leftmargin+'px';
    
}



