console.log('Loaded!');
//Moving madi on a click in page1


//Javascript for second page :)
//counting number of clicks

var button = document.getElementById("button");

button.onclick = function () {
    
    
    var request= new XMLhttpRequest();
   
   
   request.onreadystatechange=function(){
       if(request.readystate===XMLhttpRequest.DONE)
          {
               if(request.status===200)
              {
              var counter=request.responseText;
              var span=document.getElementById("span");
              span.innerHTML = counter.toString();
           
               }
              
          }  
};
request.open('GET','http:dharma11.imad.hasura-app.io/counter',true);
request.send(null);

       
   
    

    
};




