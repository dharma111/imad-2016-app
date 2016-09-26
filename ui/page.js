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
