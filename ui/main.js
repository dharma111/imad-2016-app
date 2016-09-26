console.log('Loaded!');
//Moving madi on a click in page1


//Javascript for second page :)
//counting number of clicks
var clicks=0;
var counting=document.getElementById('counter');
counting.onclick=function()
{
    
     clicks=clicks+1;
     var number=document.getElementById('count');
    number.innerHTML = clicks.toString();
};





