console.log('Loaded!');
//Moving madi on a click in page1


//Javascript for second page :)
//counting number of clicks
var clicks=0;
var button = document.getElementById('counter');
button.onclick = function ()
{
    
     clicks=clicks+1;
     var span=document.getElementById('count');
    span.innerHTML = clicks.toString();
};





