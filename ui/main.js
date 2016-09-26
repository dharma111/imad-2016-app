console.log('Loaded!');
var image=document.getElementById('img');
var rightmargin=0;
function moveLeft()
{
    rightmargin=rightmargin+10;
    image.style.marginLeft=rightmargin+'px';

}

image.onclick= function(){

    var int = setInterval(moveLeft,50);
};





