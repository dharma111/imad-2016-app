console.log('Loaded!');
//Moving madi on a click in page1


//Javascript for second page :)
//counting number of clicks

var button = document.getElementById("button");

button.onclick = function () {
    
    
    var request= new XMLHttpRequest();
   
   
   request.onreadystatechange=function(){
       if(request.readystate===XMLHttpRequest.DONE)
          {
               if(request.status===200)
              {
              var counter=request.responseText;
              var test=document.getElementById('span');
              test.innerHTML = counter.toString();
           
               }
              
          }  
};
request.open('GET','http://dharma111.imad.hasura-app.io/counter',true);
request.send(null);

       
   
    

    
};




