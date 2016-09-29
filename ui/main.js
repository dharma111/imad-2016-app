console.log('Loaded!');
//Moving madi on a click in page1



//counting number of clicks

var button = document.getElementById("button");

var counter;
button.onclick = function () {
    
    
    var request= new XMLHttpRequest();
   
   
   request.onreadystatechange=function()
   {
       if(request.readyState===XMLHttpRequest.DONE)
          {
               if(request.status===200)
              {
              counter=request.responseText;
              var test=document.getElementById('span');
              test.innerHTML = counter.toString();
           
               }
              
          }  

   }; 

    request.open('GET','http://dharma111.imad.hasura-app.io/counter',true);
request.send(null);
};


//name input
var nameinput=document.getElementById('name');
var nam=nameinput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function ()
{
    var namelist = ['dharma','janu','sorna','ramachandran'];
    
    var list=' ';
    for(var i=0; i<namelist.length; i++){
    
        list +='<li>' +namelist[i]+ '</li>' ;}
    
    var ul=document.getElementById('listed');
    ul.innerHTML=list;
};
       
   
    

    





